import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HelpOffer} from "../model/help-offer";
import {paths} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HelpOfferService {

  constructor(private apiService: ApiService) { }

  getAllHelpOffers(): Observable<HelpOffer[]> {
    return this.apiService.get<HelpOffer>(paths.getAllHelpOffers, undefined);
  }
}
