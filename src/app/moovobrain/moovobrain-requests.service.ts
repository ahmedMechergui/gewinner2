import {Injectable} from '@angular/core';
import {AuthService} from '../shared/authentication/auth.service';
import {take} from 'rxjs/operators';
import {Testimonial} from './testimonial';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../shared/services/host-url.service';
import {BrowserDetectorService} from '../shared/services/browser-detector.service';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class MoovobrainRequestsService {

  url = this.urlService.url;
  /*=============================
   # Feedback and testimonials section
    ============================= */
  client = null;
  reviewsNumber = [0, 3, 10, 23, 123];
// indicates if the current client has a stored feedback;
  hasFeedback = false;

  loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
    ' Accusamus dicta esse eum expedita fuga natus porro sit vel vero vitae.' +
    ' Facilis minus molestias mollitia tempore temporibus vero!';
  testimonials: Testimonial[] = [
    {
      title: 'Moovobrain made me more',
      description: this.loremIpsum,
      country: 'Tunisia',
      name: 'Ahmed',
      rating: 4,
      date: new Date()
    },
    {
      title: 'Moovobrain made me more',
      description: this.loremIpsum,
      country: 'Tunisia',
      name: 'Ahmed',
      rating: 5,
      date: new Date()
    }
  ];

  constructor(private browserDetector: BrowserDetectorService,
              private authService: AuthService,
              private http: HttpClient,
              private urlService: HostURLService) {
  }

  storeFeedback(description, rating) {
    this.authService.clientSubject.pipe(take(1)).subscribe(client => {
      this.client = client;
    });
    const testimonial: Testimonial = {
      title: '',
      description,
      rating,
      name: this.client.name,
      country: this.client.country,
      date: new Date()
    };

    // looks stupid code , but no other way has worked properly
    this.testimonials[1].title = testimonial.title;
    this.testimonials[1].country = testimonial.country;
    this.testimonials[1].name = testimonial.name;
    this.testimonials[1].date = testimonial.date;
    this.testimonials[1].description = testimonial.description;
    this.testimonials[1].rating = testimonial.rating;
    if (this.browserDetector.isOnBrowser()) {
      localStorage.setItem('feedback', JSON.stringify(testimonial));
    }
  }

  /*=============================
  # Moovobrain tests section
   ============================= */


  applyForTest(requestBody) {
    return this.http.post(this.url + '/tests', requestBody);
  }

  /*=============================
   # Moovobrain orders section
    ============================= */

  // this is for voice mode
  orderMoovobrain(requestBody, pricePurchase) {
    console.log(requestBody);
    return this.http.post(this.url + '/moovobrain', {...requestBody, pricePurchase});
  }

  // this is for brain mode preorder
  preOrderMoovobrain(requestBody: FormGroup) {
    requestBody = requestBody.getRawValue();
    console.log(requestBody);
    return this.http.post(this.url + '/moovobrain', {...requestBody, pricePurchase: 0, mode: 'brain', status: 'pre-ordered'});
  }

}
