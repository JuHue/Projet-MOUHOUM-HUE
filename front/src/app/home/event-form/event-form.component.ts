import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';
import { Organisation } from 'src/app/models/organisation.model';
import { HttpClient } from '../../../http-client';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, AfterViewInit {

  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
  public thirdFormGroup!: FormGroup;

  public formError: string = '';

  public allOrganisations: Organisation[] = [];
  public isOrganisationsLoaded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.setupForm();
    if (this.firstFormGroup.get('isADemonstration')?.value) {
      this.firstFormGroup.get('place')?.disable();
      this.firstFormGroup.get('place')?.clearValidators();
      this.firstFormGroup.get('startPlace')?.enable();
      this.firstFormGroup.get('endPlace')?.enable();
    } else {
      this.firstFormGroup.get('place')?.enable();
      this.firstFormGroup.get('startPlace')?.disable();
      this.firstFormGroup.get('startPlace')?.clearValidators();
      this.firstFormGroup.get('endPlace')?.disable();
      this.firstFormGroup.get('endPlace')?.clearValidators();
    }
  }

  ngAfterViewInit(): void {
    this.firstFormGroup.get('isADemonstration')?.valueChanges.subscribe((value) => {
      if (value) {
        this.firstFormGroup.get('place')?.disable();
        this.firstFormGroup.get('place')?.clearValidators();
        this.firstFormGroup.get('startPlace')?.enable();
        this.firstFormGroup.get('endPlace')?.enable();
      } else {
        this.firstFormGroup.get('place')?.enable();
        this.firstFormGroup.get('startPlace')?.disable();
        this.firstFormGroup.get('startPlace')?.clearValidators();
        this.firstFormGroup.get('endPlace')?.disable();
        this.firstFormGroup.get('endPlace')?.clearValidators();
      }
    });
  }


  public setupForm() {
    this.setupFirstFormGroup();
    this.setupSecondFormGroup();
    this.fetchOrganisations();
    this.setupThirdFormGroup();
  }

  private setupFirstFormGroup() {
    this.firstFormGroup = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      description: this.fb.control('', [Validators.required]),
      date: this.fb.control('', [Validators.required]),
      time: this.fb.control('', [Validators.required, Validators.pattern('^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]$')]),
      isADemonstration: this.fb.control(false, [Validators.required]),
      place: this.fb.control('', [Validators.required]),
      startPlace: this.fb.control('', [Validators.required]).disable(),
      endPlace: this.fb.control('', [Validators.required]).disable(),
    });
  }

  private setupSecondFormGroup() {
    this.secondFormGroup = this.fb.group({
      affiliateTo: this.fb.control('', [Validators.required]),
      images: this.fb.control(''),
      videos: this.fb.control(''),
      eventDuration: this.fb.control('', Validators.pattern('^[0-9][0-9]:[0-9][0-9]$')),
      eventStrikeFundLink: this.fb.control(''),
      eventPrice: this.fb.control(0, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')),
      eventMaxParticipant: this.fb.control(0, Validators.pattern('^[0-9]+$')),
      eventMinParticipant: this.fb.control(0, Validators.pattern('^[0-9]+$')),
    });
  }
  private setupThirdFormGroup() {
    this.thirdFormGroup = this.fb.group({
      eventIsActive: this.fb.control(true, [Validators.required]),
      eventIsPublic: this.fb.control(true, [Validators.required]),
      eventIsFree: this.fb.control(true, [Validators.required]),
      eventIsOnline: this.fb.control(true, [Validators.required]),
    })
  }

  private formsReset() {
    this.firstFormGroup.reset();
    this.firstFormGroup.setErrors(null);
    this.firstFormGroup.updateValueAndValidity();
    this.secondFormGroup.reset();
    this.secondFormGroup.setErrors(null);
    this.secondFormGroup.updateValueAndValidity();
    this.thirdFormGroup.reset();
    this.thirdFormGroup.setErrors(null);
    this.thirdFormGroup.updateValueAndValidity();
  }

  private fetchOrganisations () {
    this.httpClient.getOrganisations().then((response: any) => {
      if (response !== null && response !== undefined) {
        this.isOrganisationsLoaded = true;
        this.allOrganisations = response as Organisation[];
      }
    });
  }

  public createEvent() {
    const date: string = (this.firstFormGroup.get('date')?.value as Date).toISOString();
    const goodDate: string = date.split('T')[0];
    const duration: string = this.secondFormGroup.get('eventDuration')?.value ;
    const goodDuration: string = duration + ':00';
    const evnt: event = new event(
      0,
      this.firstFormGroup.get('name')?.value || '',
      this.firstFormGroup.get('description')?.value,
      goodDate,
      this.firstFormGroup.get('time')?.value,
      this.firstFormGroup.get('place')?.value,
      this.firstFormGroup.get('startPlace')?.value,
      this.firstFormGroup.get('endPlace')?.value,
      this.secondFormGroup.get('affiliateTo')?.value,
      this.secondFormGroup.get('images')?.value,
      this.secondFormGroup.get('videos')?.value,
      goodDuration,
      this.secondFormGroup.get('eventStrikeFundLink')?.value,
      this.secondFormGroup.get('eventPrice')?.value,
      this.secondFormGroup.get('eventMaxParticipant')?.value,
      this.secondFormGroup.get('eventMinParticipant')?.value,
      this.thirdFormGroup.get('eventIsActive')?.value,
      this.thirdFormGroup.get('eventIsPublic')?.value,
      this.thirdFormGroup.get('eventIsFree')?.value,
      this.thirdFormGroup.get('eventIsOnline')?.value,
      false,
    );
    this.eventService.createEvent(evnt)
  }

  public onSubmit() {
    this.createEvent();
    this.formsReset();
  }

}

