import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {switchMap} from "rxjs";
import {HelpOffer} from "../../model/help-offer";
import {HelpOfferService} from "../../service/help-offer.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['Name', 'Description', 'City', 'Street', 'Number', 'PostCode', 'Action', 'IsReserved'];
  dataSource: MatTableDataSource<any>
  length: number;
  pageSize = 3;
  pageIndex = 0;
  @ViewChild('paginator') paginator: MatPaginator;

  displayedColumnsReserved: string[] = ['Name', 'Description', 'City', 'Street', 'Number', 'PostCode', 'Action'];
  dataSourceReserved: MatTableDataSource<any>
  lengthReserved: number;
  pageSizeReserved = 3;
  pageIndexReserved = 0;
  @ViewChild('paginatorReserved') paginatorReserved: MatPaginator;

  constructor(private helpOfferService: HelpOfferService) {
  }

  ngOnInit() {
    this.helpOfferService.countAllHelpOffersByExecutionUser().subscribe(
      (count) => {
        this.length = count;
      }
    );
    this.helpOfferService.countAllHelpOffersReservedByExecutionUser().subscribe(
      (count) => {
        this.lengthReserved = count;
      }
    )

    this.helpOfferService.getAllHelpOffersByExecutionUser(this.pageSize, this.pageIndex).subscribe(
      (helpOffers) => {
        this.dataSource = new MatTableDataSource<HelpOffer>(helpOffers);
      }
    );

    this.helpOfferService.getAllHelpOffersReservedByExecutionUser(this.pageSizeReserved, this.pageIndexReserved).subscribe(
      (helpOffers) => {
        this.dataSourceReserved = new MatTableDataSource<HelpOffer>(helpOffers);
      }
    );
  }


  ngAfterViewInit() {
    this.paginator.page.pipe(
      switchMap(() => {
        const pageSize = this.paginator.pageSize;
        const pageIndex = this.paginator.pageIndex;
        return this.helpOfferService.getAllHelpOffersByExecutionUser(pageSize, pageIndex)
      })
    ).subscribe((helpOffers: HelpOffer[]) => {
      this.dataSource = new MatTableDataSource<HelpOffer>(helpOffers);
    })

    this.paginatorReserved.page.pipe(
      switchMap(() => {
        const pageSize = this.paginatorReserved.pageSize
        const pageIndex = this.paginatorReserved.pageIndex;
        return this.helpOfferService.getAllHelpOffersReservedByExecutionUser(pageSize, pageIndex)
      })
    ).subscribe((helpOffers: HelpOffer[]) => {
      this.dataSourceReserved = new MatTableDataSource<HelpOffer>(helpOffers);
    })
  }
}



