import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {TeamComponent} from './team/team.component';
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


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'moovobrain', component: MoovobrainComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'team', component: TeamComponent},
  {
    path: 'news', component: NewsComponent, children: [
      {path: '', component: NewsBlogComponent, pathMatch: 'full'},
      {path: ':id', component: NewsArticleComponent}
    ]
  },
  {path: 'join-us', component: JoinUsComponent},
  {
    path: 'sign-in', component: SignInComponent, children: [
      {path: '', component: LoginComponent, pathMatch: 'full'},
      {path: 'register', component: RegisterComponent},
      {path: 'password-forgotten', component: PasswordForgottenComponent}
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
