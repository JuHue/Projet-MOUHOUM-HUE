import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient } from '../../http-client';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public authForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.setupForm()
  }

  private setupForm () {
    this.authForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
    })
  }

  public async onSubmit () {
    this.httpClient.authenticate(this.authForm.value)
      .then((bool: boolean) => {
        if (bool) {
          this.httpClient.fetchAccount(this.authForm.value.username)
            .then((bool2: boolean) => {
              if (bool2) {
                this.router.navigate(['/'])
              }
            })
        }
      }) 

    const bool2 = await this.httpClient.fetchAccount(this.authForm.value.username)
    

  }
}
