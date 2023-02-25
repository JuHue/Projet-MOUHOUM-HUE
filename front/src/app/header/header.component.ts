import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {account} from 'src/models/account.model';
import { AccountService } from 'src/services/account.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nullAccount: account = new account(0, '', '', '', '', '', '', 0);

  constructor(
    public router: Router,
    public accountService: AccountService,
  ) { 
  }

  public currRoute: string = this.router.url;

  public isLogged: boolean = false;

  ngOnInit(): void {
    console.log(this.currRoute)
    console.log(this.router.url)

    this.chekIfLogged()
    
  }

  clickBrandName () {
  }

  chekIfLogged () {
    let currAccount: account = this.accountService.getAccount()
    if (!currAccount.equals(this.nullAccount)){
      this.isLogged = true;
    }
  }

  public logOut () {
    this.accountService.resetService()
  }

}
