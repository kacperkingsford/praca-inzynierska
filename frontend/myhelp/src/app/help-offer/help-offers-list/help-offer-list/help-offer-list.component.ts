import {Component, OnInit, ViewChild} from '@angular/core';
import {HelpOfferService} from "../../../service/help-offer.service";
import {HelpOffer} from "../../../model/help-offer";
import {MatPaginator} from "@angular/material/paginator";
import {switchMap} from "rxjs";
import {SuccessLoginDialogComponent} from "../../../auth/loginpage/success-dialog/success-login-dialog.component";
import {FailedLoginDialogComponent} from "../../../auth/loginpage/failed-dialog/failed-login-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {
  SuccessHelpOfferReservationDialogComponent
} from "./success-dialog/success-help-offer-reservation-dialog.component";
import {
  FailedHelpOfferReservationDialogComponent
} from "./failed-dialog/failed-help-offer-reservation-dialog.component";

@Component({
  selector: 'app-help-offer-list',
  templateUrl: './help-offer-list.component.html',
  styleUrls: ['./help-offer-list.component.css']
})
export class HelpOfferListComponent implements OnInit {
  gridColumns = 3;
  length: number;
  pageSize = 6;
  pageIndex = 0;
  helpOffers: HelpOffer[]

  constructor(private helpOfferService: HelpOfferService, public dialog: MatDialog) {
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.helpOfferService.countAllHelpOffers().subscribe(
      (count) => {
        this.length = count;
      }
    );
    this.helpOfferService.getAllHelpOffers(this.pageSize, this.pageIndex).subscribe(
      (helpOffers) => {
        this.helpOffers = helpOffers;
      }
    );
  }

  openSuccessDialog() {
    this.dialog.open(SuccessHelpOfferReservationDialogComponent, {
      disableClose: true,
    });
  }

  openErrorDialog() {
    this.dialog.open(FailedHelpOfferReservationDialogComponent);
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      switchMap(() => {
        const pageSize = this.paginator.pageSize
        const pageIndex = this.paginator.pageIndex;
        return this.helpOfferService.getAllHelpOffers(pageSize, pageIndex)
      })
    ).subscribe((helpOffers: HelpOffer[]) => {
      this.helpOffers = helpOffers
    })
  }

  reserveHelpOffer(helpOfferId: number) {
    this.helpOfferService.reserveHelpOffer(helpOfferId).subscribe(
      (value) => {
        console.log('successfully reserved!')
        console.log(value)
        this.openSuccessDialog();
      },
      error => {
        console.log('error while reserving')
        console.log(error)
        // this.openErrorDialog();
      }
    );
  }

}
