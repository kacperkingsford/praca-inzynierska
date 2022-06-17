import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {SuccessLoginDialogComponent} from "./success-dialog/success-login-dialog.component";
import {FailedLoginDialogComponent} from "./failed-dialog/failed-login-dialog.component";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  hide = true;

  checkoutForm = this.formBuilder.group({
    username: '',
    email: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openSuccessDialog() {
    this.dialog.open(SuccessLoginDialogComponent, {disableClose: true});
  }
  openErrorDialog() {
    this.dialog.open(FailedLoginDialogComponent);
  }

  onSubmit() {
    const form = this.checkoutForm.value;
    this.authService.login(form.username, form.password).subscribe(
      (value) => {
        this.authService.setJwtCookie(value)
        console.log('success!')
        console.log(value)
        this.openSuccessDialog();
        console.log(localStorage.getItem('accessToken'))
      },
      error => {
        console.log('error')
        console.log(error)
        this.openErrorDialog();
      }
    )
    this.checkoutForm.reset();
  }
}
