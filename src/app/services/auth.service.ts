import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenInfo } from '../models/token-info.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: TokenInfo | undefined;

  constructor(private http: HttpClient) { }

  tokenUrl = 'https://coding-test.rootstack.net/api/auth/login';

  async getToken(user: User) {
    try {
      const response = await this.http.post<TokenInfo>(this.tokenUrl, user).toPromise();
      console.log(response);
    } catch (error) {
      if(error.status === 401) {
        alert("Error : " + error.statusText)
      }
    }
  }
}
