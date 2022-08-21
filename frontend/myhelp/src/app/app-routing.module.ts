import {NgModule} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {HelpOfferListComponent} from "./help-offer/help-offers-list/help-offer-list/help-offer-list.component";
import {WelcomePageComponent} from "./schema/schema/welcome-page/welcome-page/welcome-page.component";
import {SignUpComponent} from "./auth/signuppage/sign-up.component";
import {LoginpageComponent} from "./auth/loginpage/loginpage.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {ProfileComponent} from "./profile/profile/profile.component";
import {CreateHelpOfferComponent} from "./help-offer/create-help-offer/create-help-offer.component";

const routes: Routes = [
  {
    path: 'help-offers',
    component: HelpOfferListComponent,
    canActivate: [AuthGuardService]
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
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-help-offer',
    component: CreateHelpOfferComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
