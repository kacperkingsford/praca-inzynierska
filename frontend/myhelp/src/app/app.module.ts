import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
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
import { SuccessDialogComponent } from './auth/signuppage/success-dialog/success-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { FailedDialogComponent } from './auth/signuppage/failed-dialog/failed-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    HelpOfferListComponent,
    WelcomePageComponent,
    LoginpageComponent,
    SignUpComponent,
    SuccessDialogComponent,
    FailedDialogComponent
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
    MatDialogModule
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
