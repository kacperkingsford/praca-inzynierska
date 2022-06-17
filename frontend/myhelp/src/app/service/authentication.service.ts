import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from "rxjs";
import {ApiService} from "./api.service";
import {paths} from "../../environments/environment";

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

  signUp(userName: string, email: string, password: string): Observable<void> {
    return this.apiService.post(paths.signUp, {'username': userName, 'email': email, 'role': ['user'], 'password': password}, undefined);
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
