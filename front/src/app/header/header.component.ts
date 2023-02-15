import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
  ) { 
  }

  public currRoute: string = this.router.url;

  ngOnInit(): void {
    console.log(this.currRoute)
    console.log(this.router.url)
  }

  clickBrandName () {
  }

}
