import { Injectable } from '@angular/core';
import { account } from 'src/models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public account: account = new account(0, '', '', '', '', '', '', 0);
  public tokenAccess: string = '';
  public tokenRefresh: string = '';

  constructor() {
  }

  public getAccount = () => this.account;
  public setAccount = (account: account) => this.account = account;

  public getTokenAccess = () => this.tokenAccess;
  public setTokenAccess = (token: string) => this.tokenAccess = token;

  public getTokenRefresh = () => this.tokenRefresh;
  public setTokenRefresh = (token: string) => this.tokenRefresh = token;
}
