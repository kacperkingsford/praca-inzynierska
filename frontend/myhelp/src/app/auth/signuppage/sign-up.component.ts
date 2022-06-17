import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthenticationService} from "../../service/authentication.service";
import {MatDialog} from '@angular/material/dialog';
import {SuccessDialogComponent} from "./success-dialog/success-dialog.component";
import {FailedDialogComponent} from "./failed-dialog/failed-dialog.component";
@Component({
  selector: 'app-signuppage',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
    this.dialog.open(SuccessDialogComponent);
  }
  openErrorDialog() {
    this.dialog.open(FailedDialogComponent);
  }

  onSubmit() {
    const form = this.checkoutForm.value;
    this.authService.signUp(form.username, form.email, form.password).subscribe(
      (value) => {
        console.log('success!')
        console.log(value)
        this.openSuccessDialog();
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
