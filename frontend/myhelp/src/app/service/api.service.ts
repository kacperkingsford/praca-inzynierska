import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {}

  static readonly apiBaseUrl = environment.api;

  get<T>(path: string, params: HttpParams | undefined = new HttpParams()): Observable<any> {
    return this.httpClient.get<T>(ApiService.apiBaseUrl + path, {params});
  }

  post<T>(path: string, body: any, params: HttpParams = new HttpParams(), headers = new HttpHeaders()): Observable<any> {
    return this.httpClient.post<T>(ApiService.apiBaseUrl + path, body, {params: params, headers: headers});
  }

  patch<T>(path: string, body: any, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.patch<T>(ApiService.apiBaseUrl + path, body, {params});
  }

  delete<T>(path: string): Observable<any> {
    return this.httpClient.delete<T>(ApiService.apiBaseUrl + path);
  }
}
