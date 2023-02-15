import AbstractHttpClient from './http-client/Abstract-http-client';
import { Injectable } from '@angular/core';
import { Organisation } from './models/organisation.model';
import { account } from './models/account.model';
import { AccountService } from './services/account.service';
import { AxiosRequestConfig } from 'axios';

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

    public async authenticate (authForm: any): Promise<boolean>  {
        this.client.post('/account/authenticate/', 
          {
            username: authForm.username, 
            password: authForm.password,
          }
        )
            .then((response: any) => {
                if (response !== null && response !== undefined) {
                    this.accountService.setTokenAccess(response.access)
                    this.accountService.setTokenRefresh(response.refresh)
                    this.client.defaults.headers.common['Authorization'] = `Bearer ${this.accountService.getTokenAccess()}`
                    return true
                }
                return false
            })
            .catch((error: any) => {
                console.log(error)
                return false
            })
        return false
    }

    public async fetchAccount (username: string): Promise<boolean> {
        console.log(username);
        const requestPayload: AxiosRequestConfig = {};
        requestPayload.data = {param: username};
        try{
            this.client.get('/account/get_account_by_username/', requestPayload)
                .then((response: any) => {
                    if (response !== null && response !== undefined) {
                        console.log(response)
                        let acc: account = response as account
                        console.log(acc)
                        this.accountService.setAccount(acc)
                        return true;
                    }
                    return false
                })
                .catch((error: any) => {
                    console.log(error)
                    return false
                })
            return false;
        } catch (err) {
            console.log(err)
            return false
        }
    }
}

export default HttpClient;
