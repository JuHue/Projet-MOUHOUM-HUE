import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-events-frame',
  templateUrl: './events-frame.component.html',
  styleUrls: ['./events-frame.component.scss']
})
export class EventsFrameComponent implements OnInit {

  @Input() events: event[] = [];
  

  constructor(
    private eventService: EventService,
    private router: Router,
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  public hasAnImage = (event: event) => event.hasAnImage();


  public navigateToEventDetail = (eventId: number) => {
    this.router.navigate(['/event', eventId]) }
  
  public copyLinkToClipboard = (eventId: number) => {
    const link = window.location.origin + '/event/' + eventId;
    this.clipboard.copy(link);
    console.info('Copied link to clipboard: ' + link);
  }


}
