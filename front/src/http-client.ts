import AbstractHttpClient from './http-client/Abstract-http-client';
import { Injectable } from '@angular/core';
import { Organisation } from './app/models/organisation.model';
import { account } from './app/models/account.model';
import { AccountService } from './app/services/account.service';
import { AxiosRequestConfig } from 'axios';

@Injectable({
    providedIn: 'root'
  })
export class HttpClient extends AbstractHttpClient {
    constructor(
    ) {
        super('http://0.0.0.0:8000')
    }

    public getOrganisations = () => this.client.get<Organisation[]>('/organisation');

    public postAccount = (form: any) => {
        this.client.post('/account/', {param: JSON.stringify(form)})
    }

    public authenticate (authForm: any): any {
        let result = null
        this.client.post('/account/authenticate/', 
          {
            username: authForm.username, 
            password: authForm.password,
          }
        )
            .then((response: any) => {
                if (response !== null && response !== undefined) {
                    result = response
                } else {
                    result = ''
                }
            })
            .catch((error: any) => {
                console.log(error)
                result = ''
            })
        return result
    }

    public setAuthHeader (token: string) {
        this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    public async fetchAccount (username: string): Promise<account | null> {
        try{
            this.client.post('account/get_account_by_username/', {param: username})
                .then((response: any) => {
                    if (response !== null && response !== undefined) {
                        return response as account
                    }
                    return null
                })
                .catch((error: any) => {
                    console.log(error)
                    return null
                })
            return null;
        } catch (err) {
            console.log(err)
            return null
        }
    }
}

export default HttpClient;
