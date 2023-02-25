import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { account } from 'src/models/account.model';
import { HttpClient } from 'src/http-client';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account: Subject<account> = new Subject<account>();
  public accountEmitted = this.account.asObservable();
  public accountValue = new account(0, '', '', '', '', '', '', 0);
  public tokenAccess: string = '';
  public tokenRefresh: string = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  public accountEmitChange (acc: account) {
    this.account.next(acc)
  }

  public getAccountValue () :account {
    return this.accountValue;
  }
  public setAccount = (account: account) => this.accountValue = account;

  public getTokenAccess = () => this.tokenAccess;
  public setTokenAccess = (token: string) => this.tokenAccess = token;

  public getTokenRefresh = () => this.tokenRefresh;
  public setTokenRefresh = (token: string) => this.tokenRefresh = token;

  public resetService () {
    this.setAccount(new account(0, '', '', '', '', '', '', 0))
    this.setTokenAccess('')
    this.setTokenRefresh('')
  }

  public async loging (authForm: FormGroup) {
    this.httpClient.authenticate(authForm.value)
      .then((bool: boolean) => {
        if (bool) {
          this.httpClient.fetchAccount(authForm.value.username)
            .then((bool2: boolean) => {
              if (bool2) {
                this.router.navigate(['/'])
              }
            })
        }
      })
  }
}
