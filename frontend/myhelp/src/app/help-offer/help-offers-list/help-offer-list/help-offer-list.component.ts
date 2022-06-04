import { Component, OnInit } from '@angular/core';
import {HelpOfferService} from "../../../service/help-offer.service";
import {HelpOffer} from "../../../model/help-offer";

@Component({
  selector: 'app-help-offer-list',
  templateUrl: './help-offer-list.component.html',
  styleUrls: ['./help-offer-list.component.css']
})
export class HelpOfferListComponent implements OnInit {
  gridColumns = 3;

  helpOffers: HelpOffer[]
  constructor(private helpOfferService: HelpOfferService) { }

  ngOnInit(): void {
    this.helpOfferService.getAllHelpOffers().subscribe(
      (helpOffers) => {
        this.helpOffers = helpOffers;
        console.log(this.helpOffers)
      }
    );
  }

}
