import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenInfo } from '../models/token-info.model';
import { User } from '../models/user.model';
import { UserInfo } from '../models/user-info.model';

@Injectable()
export class AuthService {
  private baseUrl = 'https://coding-test.rootstack.net/';
  private token: TokenInfo | undefined;

  constructor(private http: HttpClient) { }

  getToken(user: User) {
    return this.http.post<TokenInfo>(this.baseUrl + "api/auth/login", user).toPromise();
  }

  getUserInfo() {
    return this.http.get<UserInfo>(this.baseUrl + "api/auth/me").toPromise();
  }

  setTokenInfo(token: TokenInfo) {
    this.token = token
  }

  getTokenInfo() {
    return this.token;
  }
}
