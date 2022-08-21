import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SchemaComponent} from './schema/schema/schema.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {HelpOfferListComponent} from './help-offer/help-offers-list/help-offer-list/help-offer-list.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {WelcomePageComponent} from './schema/schema/welcome-page/welcome-page/welcome-page.component';
import {LoginpageComponent} from './auth/loginpage/loginpage.component';
import {SignUpComponent} from './auth/signuppage/sign-up.component';
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {SuccessDialogComponent} from './auth/signuppage/success-dialog/success-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FailedDialogComponent} from './auth/signuppage/failed-dialog/failed-dialog.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SuccessLoginDialogComponent} from "./auth/loginpage/success-dialog/success-login-dialog.component";
import {FailedLoginDialogComponent} from "./auth/loginpage/failed-dialog/failed-login-dialog.component";
import {LogoutDialogConfirmation} from "./schema/schema/logout-dialog/logout-dialog-confirmation.component";
import {ProfileComponent} from './profile/profile/profile.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {CreateHelpOfferComponent} from './help-offer/create-help-offer/create-help-offer.component';
import {MaterialFileInputModule} from "ngx-material-file-input";
import {
  SuccessCreateHelpOfferDialogComponent
} from "./help-offer/create-help-offer/success-dialog/success-create-help-offer-dialog.component";
import {
  FailedCreateHelpOfferDialogComponent
} from "./help-offer/create-help-offer/failed-dialog/failed-create-help-offer-dialog.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SpinnerHttpInterceptor} from "./interceptor/http-interceptor";
import {NgxSpinnerModule} from "ngx-spinner";
import {MatTableModule} from "@angular/material/table";
import {
  SuccessHelpOfferReservationDialogComponent
} from "./help-offer/help-offers-list/help-offer-list/success-dialog/success-help-offer-reservation-dialog.component";
import {
  FailedHelpOfferReservationDialogComponent
} from "./help-offer/help-offers-list/help-offer-list/failed-dialog/failed-help-offer-reservation-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    HelpOfferListComponent,
    WelcomePageComponent,
    LoginpageComponent,
    SignUpComponent,
    SuccessDialogComponent,
    SuccessLoginDialogComponent,
    FailedDialogComponent,
    FailedLoginDialogComponent,
    LogoutDialogConfirmation,
    ProfileComponent,
    CreateHelpOfferComponent,
    SuccessCreateHelpOfferDialogComponent,
    FailedCreateHelpOfferDialogComponent,
    SuccessHelpOfferReservationDialogComponent,
    FailedHelpOfferReservationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    FlexModule,
    HttpClientModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatTableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
