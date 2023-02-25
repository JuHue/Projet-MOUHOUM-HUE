import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { Organisation } from '../../models/organisation.model';
import { HttpClient } from '../../http-client';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {
  public form!: FormGroup;

  public allOrganisations: Organisation[] = [];
  public isOrganisationsLoaded: boolean = false;


  public formError = ''
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.setupForm()
    this.fetchOrganisations()
  }

  ngAfterViewInit(): void {

  }

  private setupForm () {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      passwordConfirmation: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      first_name: this.fb.control('', Validators.pattern('[a-zA-Z-]+')),
      last_name: this.fb.control('', Validators.pattern('[a-zA-Z-]+')),
      telephone: this.fb.control('', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10)]),
      affiliate_to: this.fb.control('', [Validators.required])
    }, { validators: this.checkPassword})
  }

  private checkPassword: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let password = group.get('password');
    let passwordConfirmation = group.get('passwordConfirmation');
    return password === passwordConfirmation ? null : { passwordMismatch: true };
  }

  private fetchOrganisations () {
    this.httpClient.getOrganisations().then((response: any) => {
      if (response !== null && response !== undefined) {
        this.isOrganisationsLoaded = true;
        this.allOrganisations = response as Organisation[];
      }
    });
  }

  public onSubmit (){
    this.httpClient.postAccount(JSON.stringify(this.form.value))
    this.form.reset()
    this.form.setErrors(null)
    this.form.updateValueAndValidity()
    console.log("success")
  }
}
