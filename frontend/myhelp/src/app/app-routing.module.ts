import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelpOfferListComponent} from "./help-offer/help-offers-list/help-offer-list/help-offer-list.component";
import {WelcomePageComponent} from "./schema/schema/welcome-page/welcome-page/welcome-page.component";
import {SignUpComponent} from "./auth/signuppage/sign-up.component";
import {LoginpageComponent} from "./auth/loginpage/loginpage.component";

const routes: Routes = [
  {
    path: 'help-offers',
    component: HelpOfferListComponent,
  },
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
