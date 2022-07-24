import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
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
    username: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20), Validators.required])],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(40), Validators.required])],
    name: ['', Validators.compose([Validators.pattern("^[A-Z]{1}[a-z]{1,20}$"), Validators.required])],
    surname: ['', Validators.compose([Validators.pattern("^[A-Z]{1}[a-z]{1,20}$"), Validators.required])],
    gender: ['',[Validators.required]],
    birthDate: ['', [Validators.required]]
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
    this.authService.signUp(form.username, form.email, form.password, form.name, form.surname, form.gender, form.birthDate).subscribe(
      (value) => {
        console.log('success!')
        console.log(value)
        this.openSuccessDialog();
        this.clearForm()
      },
      error => {
        console.log('error')
        console.log(error)
        this.openErrorDialog();
        this.clearForm();
      }
    )
  }

  clearForm() {
    this.checkoutForm.reset();
    this.checkoutForm.markAsUntouched();
    Object.keys(this.checkoutForm.controls).forEach(key =>{
      this.checkoutForm.controls[key].setErrors(null)
    });
  }
}
