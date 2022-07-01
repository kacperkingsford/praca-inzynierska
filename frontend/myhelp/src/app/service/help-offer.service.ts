import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HelpOffer} from "../model/help-offer";
import {paths} from "../../environments/environment";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HelpOfferService {

  constructor(private apiService: ApiService) {
  }

  getAllHelpOffers(pageSize: number, pageNumber: number): Observable<HelpOffer[]> {
    return this.apiService.get<HelpOffer>(paths.getAllHelpOffers, new HttpParams().set('pageSize', pageSize).set('pageNumber', pageNumber).set('pageNumber', pageNumber));
  }

  countAllHelpOffers() {
    return this.apiService.get<number>(paths.countAllHelpOffers, undefined);
  }
}
