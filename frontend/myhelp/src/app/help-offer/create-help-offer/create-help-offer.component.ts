import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {HelpOfferService} from 'src/app/service/help-offer.service';
import {SuccessCreateHelpOfferDialogComponent} from "./success-dialog/success-create-help-offer-dialog.component";
import {FailedCreateHelpOfferDialogComponent} from "./failed-dialog/failed-create-help-offer-dialog.component";
import {chainedInstruction} from "@angular/compiler/src/render3/view/util";

@Component({
  selector: 'app-create-help-offer',
  templateUrl: './create-help-offer.component.html',
  styleUrls: ['./create-help-offer.component.css']
})
export class CreateHelpOfferComponent implements OnInit {
  hide = true;

  checkoutForm = this.formBuilder.group({
    description: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(256), Validators.required])],
    city: ['', Validators.compose([Validators.pattern("^[A-Z]{1}[a-z]{1,20}$"), Validators.required])],
    street: ['', Validators.compose([Validators.pattern("^[A-Z]{1}[a-z]{1,20}$"), Validators.required])],
    number: ['', Validators.compose([Validators.pattern("^[0-9]{1,4}$"), Validators.required])],
    postCode: ['', Validators.compose([Validators.pattern("^[0-9]{2}-[0-9]{3}$"), Validators.required])],
    name: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(256), Validators.required])],
    file: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private helpOfferService: HelpOfferService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openSuccessDialog() {
    this.dialog.open(SuccessCreateHelpOfferDialogComponent);
  }

  openErrorDialog() {
    this.dialog.open(FailedCreateHelpOfferDialogComponent);
  }

  onSubmit() {
    const form = this.checkoutForm.value;
    console.log(form)

    this.helpOfferService.createHelpOffer({
      description: form.description,
      city: form.city,
      street: form.street,
      number: form.number,
      postCode: form.postCode,
      name: form.name,
      file: form.file
    }).subscribe(
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
        this.clearForm()
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
