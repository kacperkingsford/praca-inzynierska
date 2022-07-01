import {Component, OnInit, ViewChild} from '@angular/core';
import {HelpOfferService} from "../../../service/help-offer.service";
import {HelpOffer} from "../../../model/help-offer";
import {MatPaginator} from "@angular/material/paginator";
import {switchMap} from "rxjs";

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

  constructor(private helpOfferService: HelpOfferService) {
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
}
