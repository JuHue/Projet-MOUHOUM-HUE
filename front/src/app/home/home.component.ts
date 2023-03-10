import { Component, OnInit, AfterViewInit, ChangeDetectorRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { EventFormComponent } from './event-form/event-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('HomeContent', {read: ViewContainerRef}) homeContentref!: ViewContainerRef;
  @ViewChild('EventDisplay', {read: TemplateRef}) eventDisplayref!: TemplateRef<any>;
  @ViewChild('EventForm', {read: TemplateRef}) eventFormRef!: TemplateRef<any>;

  public allEvents: event[] = [];
  public eventsToShowSubject: Subject<event[]> = new Subject<event[]>();
  public bufferEvents: event[] = [];
  public eventsToShow: event[] = [];

  public pagination: number = 1;
  private indexStart: number = 0;
  private indexEnd: number = 6;

  public isLoaded: boolean = true;

  public searchInput: string = '';
  public filterInput: string = '';

  public isEventFormOpen: boolean = false;

  constructor(
    private eventService: EventService,
    private cdRef: ChangeDetectorRef,
  ) { 
    this.eventService.getEvent();
    this.eventService.allEvents.subscribe((events: event[]) => {
      this.allEvents = events;
      this.bufferEvents = events;
      this.eventsToShow = this.allEvents.slice(this.indexStart, this.indexEnd);
    })
    this.eventService.isLoaded.subscribe((isLoaded: boolean) => {
      this.isLoaded = isLoaded;
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = false
    }, 3000);
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  public changePagination (page: number): void {
    this.pagination = page;
    this.updateEventsToShow();
  }

  private updateEventsToShow (): void {
    this.indexStart = (this.pagination - 1) * 6;
    this.indexEnd = this.indexStart + 6;
    this.eventsToShow = this.bufferEvents.slice(this.indexStart, this.indexEnd);
  }


  public changePaginationEvents (event: any): void {
    this.pagination = event.pageIndex + 1;
    this.updateEventsToShow();
  }

  public searchEvents (): void {
    this.bufferEvents = [];
    if (this.searchInput === '') {
      this.bufferEvents = this.allEvents;
      this.updateEventsToShow();
      return;
    }
    this.allEvents.forEach((event: event) => {
      if (event.event_name.toLowerCase().includes(this.searchInput.toLowerCase())) {
        this.bufferEvents.push(event);
      }
    })
    this.updateEventsToShow();
  }

  public getAllActiveEvents(): void{
    this.bufferEvents = [];
    this.allEvents.forEach((event: event) => {
      if (event.event_is_active) {
        this.bufferEvents.push(event);
      }
    })
    this.updateEventsToShow();
  }

  public getAllOnlineEvents(): void{
    this.bufferEvents = [];
    this.allEvents.forEach((event: event) => {
      if (event.event_is_online) {
        this.bufferEvents.push(event);
      }
    })
    this.updateEventsToShow();
  }

  public getAllFreeEvents(): void{
    this.bufferEvents = [];
    this.allEvents.forEach((event: event) => {
      if (event.event_is_free) {
        this.bufferEvents.push(event);
      }
    })
    this.updateEventsToShow();
  }

  public resetFilter (): void {
    this.bufferEvents = this.allEvents;
    this.updateEventsToShow();
  }

  public changeContent (): void {
    this.isEventFormOpen = !this.isEventFormOpen;
    this.homeContentref.clear();
    if (this.isEventFormOpen) {
      this.homeContentref.createEmbeddedView(this.eventFormRef);
    } else {
      this.homeContentref.createEmbeddedView(this.eventDisplayref);
    }
    this.eventService.getEvent();
  }

}
