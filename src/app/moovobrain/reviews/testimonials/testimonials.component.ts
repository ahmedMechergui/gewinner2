import {Component, OnInit} from '@angular/core';
import {Testimonial} from '../../testimonial';
import {MoovobrainRequestsService} from '../../moovobrain-requests.service';
import {BrowserDetectorService} from '../../../shared/services/browser-detector.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials = this.moovobrainRequestsService.testimonials;

  constructor(private browserDetector: BrowserDetectorService, public moovobrainRequestsService: MoovobrainRequestsService) {
  }

  ngOnInit() {
    this.loadFakeTestimonial();
  }

  // clients feedback isn't really submitted to server , it is just stored locally and
  // showed to that specific client
  loadFakeTestimonial() {
    if (this.browserDetector.isOnBrowser()) {
      const testimonial: Testimonial = JSON.parse(localStorage.getItem('feedback'));
      if (!testimonial) {
        return;
      }
      this.moovobrainRequestsService.hasFeedback = true;
      this.moovobrainRequestsService.testimonials.push(testimonial);
      this.moovobrainRequestsService.reviewsNumber[testimonial.rating - 1]++;
    }
  }

}
