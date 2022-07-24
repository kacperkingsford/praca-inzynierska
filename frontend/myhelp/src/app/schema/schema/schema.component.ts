import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {LogoutDialogConfirmation} from "./logout-dialog/logout-dialog-confirmation.component";
import {SpinnerService} from "../../service/spinner.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, public authenticationService: AuthenticationService, public dialog: MatDialog, public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.visibility.subscribe(
      (shouldShowSpinner: boolean) => {
        if (shouldShowSpinner) {
          this.spinner.show();
        }
        else {
          this.spinner.hide();
        }
      }
    )
  }

  logout() {
    this.dialog.open(LogoutDialogConfirmation)
  }
}
