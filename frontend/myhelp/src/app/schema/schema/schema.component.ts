import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {LogoutDialogConfirmation} from "./logout-dialog/logout-dialog-confirmation.component";

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  logout() {
    this.dialog.open(LogoutDialogConfirmation)
  }
}
