import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NewsComponent} from './news/news.component';
import {NewsBlogComponent} from './news/news-blog/news-blog.component';
import {NewsArticleComponent} from './news/news-article/news-article.component';
import {JoinUsComponent} from './join-us/join-us.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {LoginComponent} from './sign-in/login/login.component';
import {RegisterComponent} from './sign-in/register/register.component';
import {PasswordForgottenComponent} from './sign-in/password-forgotten/password-forgotten.component';
import {MoovobrainComponent} from './moovobrain/moovobrain.component';
import {GeneralComponent} from './account-client/general/general.component';
import {ServicesComponent} from './account-client/services/services.component';
import {AccessorieItemComponent} from './accessorie-item/accessorie-item.component';
import {AuthGuard} from './shared/authentication/auth-guard.service';
import {LoginGuard} from './shared/authentication/login.guard';
import {ResetPasswordComponent} from './sign-in/reset-password/reset-password.component';
import {MoovobrainPaymentComponent} from './moovobrain-payment/moovobrain-payment.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'moovobrain-payment', component: MoovobrainPaymentComponent},
  {path: 'moovobrain', component: MoovobrainComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'account', component: GeneralComponent, canActivate: [AuthGuard]},
  {path: 'services', component: ServicesComponent, canActivate: [AuthGuard]},
  {path: 'accessorie/:id', component: AccessorieItemComponent},
  {
    path: 'news', component: NewsComponent, children: [
      {path: '', component: NewsBlogComponent, pathMatch: 'full'},
      {path: ':id', component: NewsArticleComponent}
    ]
  },
  {path: 'join-us', component: JoinUsComponent},
  {
    path: 'sign-in', component: SignInComponent, canActivate: [LoginGuard], children: [
      {path: '', component: LoginComponent, pathMatch: 'full'},
      {path: 'register', component: RegisterComponent},
      {path: 'password-forgotten', component: PasswordForgottenComponent}
    ]
  },
  {path: 'reset/:id', component: ResetPasswordComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
