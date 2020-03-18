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
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './sign-in/login/login.component';
import { RegisterComponent } from './sign-in/register/register.component';
import { PasswordForgottenComponent } from './sign-in/password-forgotten/password-forgotten.component';
import { FocusElementDirective } from './focus-element.directive';



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
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
