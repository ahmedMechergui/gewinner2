import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TeamComponent} from './team/team.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AccessoriesComponent} from './home/accessories/accessories.component';
import {NewsComponent} from './news/news.component';
import {NewsArticleComponent} from './news/news-article/news-article.component';
import {NewsBlogComponent} from './news/news-blog/news-blog.component';
import {NewsSidebarComponent} from './news/news-sidebar/news-sidebar.component';
import {JoinUsComponent} from './join-us/join-us.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './sign-in/sign-in.component';
import {LoginComponent} from './sign-in/login/login.component';
import {RegisterComponent} from './sign-in/register/register.component';
import {PasswordForgottenComponent} from './sign-in/password-forgotten/password-forgotten.component';
import {FocusElementDirective} from './focus-element.directive';
import {MoovobrainComponent} from './moovobrain/moovobrain.component';
import {HeroComponent} from './home/hero/hero.component';
import {ProductComponent} from './moovobrain/product/product.component';
import {MoovobrainVideoComponent} from './moovobrain/moovobrain-video/moovobrain-video.component';
import {MoovobrainMobileAppComponent} from './moovobrain/moovobrain-mobile-app/moovobrain-mobile-app.component';
import {ReviewsComponent} from './moovobrain/reviews/reviews.component';
import {TestimonialsComponent} from './moovobrain/reviews/testimonials/testimonials.component';
import {FeedbackComponent} from './moovobrain/reviews/feedback/feedback.component';
import {MoovobrainFormsComponent} from './moovobrain/moovobrain-forms/moovobrain-forms.component';
import {TestIndividualComponent} from './moovobrain/moovobrain-forms/test-individual/test-individual.component';
import {FormOrderComponent} from './moovobrain/moovobrain-forms/form-order/form-order.component';
import { AccountDropdownComponent } from './header/account-dropdown/account-dropdown.component';
import { AccountClientComponent } from './account-client/account-client.component';
import { GeneralComponent } from './account-client/general/general.component';
import { ServicesComponent } from './account-client/services/services.component';
import { ScheduledControlsComponent } from './account-client/services/scheduled-controls/scheduled-controls.component';
import { AccessorieItemComponent } from './accessorie-item/accessorie-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    PageNotFoundComponent,
    AccessoriesComponent,
    NewsComponent,
    NewsArticleComponent,
    NewsBlogComponent,
    NewsSidebarComponent,
    JoinUsComponent,
    SignInComponent,
    LoginComponent,
    RegisterComponent,
    PasswordForgottenComponent,
    FocusElementDirective,
    MoovobrainComponent,
    HeroComponent,
    ProductComponent,
    MoovobrainVideoComponent,
    MoovobrainMobileAppComponent,
    ReviewsComponent,
    TestimonialsComponent,
    FeedbackComponent,
    MoovobrainFormsComponent,
    TestIndividualComponent,
    FormOrderComponent,
    AccountDropdownComponent,
    AccountClientComponent,
    GeneralComponent,
    ServicesComponent,
    ScheduledControlsComponent,
    AccessorieItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
