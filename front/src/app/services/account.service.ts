import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { account } from 'src/app/models/account.model';
import { HttpClient } from 'src/http-client';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private defaultAccount: account = new account(0,'', '', '', '', '', '', 0);
  private accountSubject: BehaviorSubject<account>;
  public account: Observable<account>;

  public accesToken: string = '';
  public refreshToken: string = '';

  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isLogged: Observable<boolean> = this.isLoggedSubject.asObservable();

  constructor (
    private httpClient: HttpClient,
    private router: Router,
  ){
    this.accountSubject = new BehaviorSubject(this.defaultAccount);
    this.account = this.accountSubject.asObservable();

    if (localStorage.getItem('access_token') !== null){
      this.accesToken = localStorage.getItem('access_token') as string
      this.refreshToken = localStorage.getItem('refresh_token') as string
      this.httpClient.setAuthHeader(this.accesToken)
      if (localStorage.getItem('account') !== null){
        const account = JSON.parse(localStorage.getItem('account') as string) as account
        this.setAccount(account)
      }
      this.setIsLogged(true)
    }
  }

  public getAccountValue () {
    return this.accountSubject.value
  }

  public registerAccount (form: any) {
    this.httpClient.postAccount(form)
  }

  public setSession(authResult: any){
    this.setIsLogged(true)
    this.accesToken = authResult.access
    this.refreshToken = authResult.refresh
    this.httpClient.setAuthHeader(this.accesToken)

    localStorage.setItem('access_token', authResult.access)
    localStorage.setItem('refresh_token', authResult.refresh)
  }

  public getToken(): string {
    return this.accesToken
  }

  public getAccount (): Observable<account> {
    return this.accountSubject.asObservable()
    }
  
  public setAccount (account: account) {
    localStorage.setItem('account', JSON.stringify(account))
    this.accountSubject.next(account)
  }

  public setIsLogged (isLogged: boolean) {
    this.isLoggedSubject.next(isLogged)
  }

  public getIsLogged (): Observable<boolean> {
    return this.isLoggedSubject.asObservable()
  }

  public setIsLoggedSubject (isLogged: boolean) {
    this.isLoggedSubject.next(isLogged)
  }

  public getIsLoggedSubject (): BehaviorSubject<boolean> {
    return this.isLoggedSubject
  }

  public async fetchAccount (username: string): Promise<account | null> {
    try{
      const response = await this.httpClient.client.post('account/get_account_by_username/', {param: username})
      if (response !== null && response !== undefined) {
        return response as account
      }
      return null
    } catch (error) {
      console.log(error)
      return null
    }
  }

  public setUpAccount (username: string) {
    this.fetchAccount(username)
      .then((account: account | null) => {
        if (account !== null) {
          this.setAccount(account)
        }
      })
  }

  public logout () {
    this.setIsLogged(false)
    localStorage.removeItem('account')
    this.accountSubject.next(this.defaultAccount)
    this.accesToken = ''
    this.refreshToken = ''
    this.router.navigate(['/'])
  }
  
}
