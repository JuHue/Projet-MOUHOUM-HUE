import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient } from '../../http-client';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public authForm!: FormGroup;
  public errorForm: string = '';
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private accService: AccountService
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
    this.httpClient.client.post('/account/authenticate/', {username: this.authForm.value.username, password: this.authForm.value.password,})
      .then((response: any) => {
          if (response !== null && response !== undefined) {
              this.accService.setSession(response)
          }
      })
      .catch((error: any) => {
          console.log(error)
          this.errorForm = 'Invalid username or password'
      })
    
    this.accService.setUpAccount(this.authForm.value.username)
    this.router.navigate(['/'])
  }
}
