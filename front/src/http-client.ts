import AbstractHttpClient from './http-client/Abstract-http-client';
import { Injectable } from '@angular/core';
import { Organisation } from './models/organisation.model';
import { account } from './models/account.model';
import { AccountService } from './services/account.service';

@Injectable({
    providedIn: 'root'
  })
export class HttpClient extends AbstractHttpClient {
    constructor(
        public accountService: AccountService
    ) {
        super('http://0.0.0.0:8000', accountService)
    }

    public getOrganisations = () => this.client.get<Organisation[]>('/organisation');

    public postAccount = (form: any) => {
        this.client.post('/account/', {param: form})
    }

    public authenticate = (authForm: any) => {
        console.log((authForm))
        this.client.post('/account/authenticate/', 
          {
            username: authForm.username, 
            password: authForm.password,
          }
        )
            .then((response: any) => {
                if (response !== null && response !== undefined) {
                    console.log(response.access)
                    this.accountService.setTokenAccess(response.access)
                    this.accountService.setTokenRefresh(response.refresh)
                    this.fetchAccount(authForm.username)
                }
                console.log(this.accountService.getTokenAccess())
                console.log(this.accountService.getAccount())
                console.log(this.client)
            })
            .catch((error: any) => {console.log(error)})
        
    }

    private fetchAccount = (username: string) => {
        this.client.get('/account/get_all_accounts', {params: username})
            .then((response: any) => {
                if (response !== null && response !== undefined) {
                    console.log(response)
                    this.accountService.setAccount(response as account)
                }
            })
    }
}

export default HttpClient;
