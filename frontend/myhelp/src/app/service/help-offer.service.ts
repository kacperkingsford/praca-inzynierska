import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HelpOffer} from "../model/help-offer";
import {paths} from "../../environments/environment";
import {HttpHeaders, HttpParams} from "@angular/common/http";
import {CreateHelpOfferBody} from "../model/create-help-offer";

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

  createHelpOffer(createHelpOfferBody: CreateHelpOfferBody) {
    let fileList: FileList = createHelpOfferBody.file.files;
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.apiService.post<HelpOffer>(paths.createHelpOffer, formData, new HttpParams().set('description', createHelpOfferBody.description).set('city', createHelpOfferBody.city).set('street', createHelpOfferBody.street).set('number', createHelpOfferBody.number.toString()).set('postCode', createHelpOfferBody.postCode).set('name', createHelpOfferBody.name), headers);
  }
}
