import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {paths} from "../../environments/environment";
import { Moment } from 'moment';
import * as _moment from 'moment';

const moment = _moment;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public jwtHelper: JwtHelperService, public apiService: ApiService) {
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    // @ts-ignore
    return !this.jwtHelper.isTokenExpired(token);
  }

  signUp(userName: string, email: string, password: string, name: string, surname: string, gender: string, birthDate: Date): Observable<void> {
    let formatedDate = birthDate.toISOString().replace('-', '-').split('T')[0].replace('-', '-');
    console.log(userName + ' ' + email + ' ' + password + ' ' + name + ' ' + surname + ' ' + gender + ' ' + formatedDate)
    return this.apiService.post(paths.signUp, {'username': userName, 'email': email, 'role': ['user'], 'password': password, 'name': name, 'surname': surname, 'gender': gender, 'birthDate': formatedDate}, undefined);
  }

  login(userName: string, password: string): Observable<void> {
    return this.apiService.post(paths.login, {'username': userName, 'password': password})
  }

  setJwtCookie(authToken: any) {
    localStorage.setItem('accessToken', authToken.accessToken);
  }

  logout() {
    console.log(localStorage.getItem("accessToken"))
    localStorage.removeItem("accessToken");
    console.log(localStorage.getItem("accessToken"))
  }
}
