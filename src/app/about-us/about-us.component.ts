import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';
import {AboutUsTestimonial} from './about-us-testimonial';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  // testimonials shall be managed from dashboard
  testimonials: AboutUsTestimonial[] = [
    // tslint:disable-next-line:max-line-length
    new AboutUsTestimonial('Saul Goodman', 'Ceo &amp; Founder', 'assets/img/testimonials/testimonials-1.jpg', 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\n'),
    // tslint:disable-next-line:max-line-length
    new AboutUsTestimonial('Sara Wilsson', 'Designer', 'assets/img/testimonials/testimonials-2.jpg', 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n'),
    // tslint:disable-next-line:max-line-length
    new AboutUsTestimonial('Jena Karlis', 'Store Owner', 'assets/img/testimonials/testimonials-3.jpg', 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.\n'),
    // tslint:disable-next-line:max-line-length
    new AboutUsTestimonial('Matt Brandon', 'Freelancer', 'assets/img/testimonials/testimonials-4.jpg', 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\n'),
    // tslint:disable-next-line:max-line-length
    new AboutUsTestimonial('John Larson', 'Entrepreneur', 'assets/img/testimonials/testimonials-5.jpg', 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.\n'),
  ];

  constructor(private scriptsLoader: ScriptsLoaderService, private rendered2: Renderer2) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    this.scriptsLoader.addScripts(this.rendered2, 'about-us');
  }

}
