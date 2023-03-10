import { AfterViewInit, Component, ChangeDetectorRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import {account} from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('LeftLinks', {read: ViewContainerRef}) leftLinksRef!: ViewContainerRef;
  @ViewChild('NotLogged', {read: TemplateRef}) notLoggedRef!: TemplateRef<any>;
  @ViewChild('Logged', {read: TemplateRef}) loggedRef!: TemplateRef<any>;


  public currAcc: account = new account(0, '', '', '', '', '', '', 0);
  private defaultAcc: account = new account(0, '', '', '', '', '', '', 0);
  public currRoute: string = this.router.url;

  constructor(
    public router: Router,
    public accountService: AccountService,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.accountService.account.subscribe((account: account) => {
      if (account !== this.defaultAcc) {
        this.currAcc = account;
      }
    })
  }

  ngAfterViewInit(): void {
    this.accountService.isLogged.subscribe((isLogged: boolean) => {
      this.render(isLogged)
    })
    this.cdRef.detectChanges();
  }

  clickBrandName () {
  }

  public render(isLogged: boolean) {
    this.leftLinksRef.clear()
    if (isLogged) {
      this.leftLinksRef.createEmbeddedView(this.loggedRef)
    } else {
      this.leftLinksRef.createEmbeddedView(this.notLoggedRef)
    }
  }

  public logOut () {
    this.accountService.logout()
  }

}
