import { Component, OnInit, Input } from '@angular/core';
import { event } from '../../../models/event.model';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent implements OnInit {

  @Input() event: event = new event(
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
);



  constructor() { }

  ngOnInit(): void {
  }

}
