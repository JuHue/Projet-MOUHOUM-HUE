import { Injectable } from '@angular/core';
import { HttpClient } from '../../http-client';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public eventsSubject = new Subject<event[]>();
  public allEvents = this.eventsSubject.asObservable();

  public isLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);;
  public isLoaded: Observable<boolean> = this.isLoadedSubject.asObservable();


  constructor(
    private http: HttpClient
  ) {
    let stringifFiedEvents: string = '';
    if (localStorage.getItem('events') !== null) {
      stringifFiedEvents = (localStorage.getItem('events'))?.toString() || '';
      this.setAllEvents(JSON.parse(stringifFiedEvents))
    }
   }

  public getIslLoadedValue () {
    return this.isLoadedSubject.value
  }
  public setIsLoaded (value: boolean) {
    this.isLoadedSubject.next(value)
  }

  public orderEventsByDate (events: event[]): event[] {
    return events.sort((a: event, b: event) => {
      return new Date(b.event_date).getTime() - new Date(a.event_date).getTime()
    })
  }

  public getEvent () {
    this.http.client.get('/event')
      .then((response: any) => {
        if (response !== null && response !== undefined) {
          this.setAllEvents(this.orderEventsByDate(response as event[]))
          this.setIsLoaded(true)
      }
    })
  }
  public setAllEvents (events: event[]): void {
    localStorage.setItem('events', JSON.stringify(events))
    this.eventsSubject.next(events)
  }
  public getAllEvents (): Observable<event[]> {
    return this.eventsSubject.asObservable()
  }

  // get event by id
  public getEventById (id: number): event | undefined {
    let events: event[] = JSON.parse((localStorage.getItem('events'))?.toString() || '')
    return events.find((event: event) => event.event_id === id)
  }

  public getDefaultEvent (): event {
    return new event(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      false
    )
  }

  public createEvent (event: event) { 
    this.http.client.post('/event/', {param: JSON.stringify(event)})
      .then((response: any) => {
        if (response !== null && response !== undefined) {
          console.log('success')
        }
      })
  }
}
