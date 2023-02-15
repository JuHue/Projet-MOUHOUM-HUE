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
    private httpClient: HttpClient
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

  public onSubmit () {
    this.httpClient.authenticate(this.authForm.value);
    
  }
}
