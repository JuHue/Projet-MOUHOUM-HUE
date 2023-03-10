/// <reference types="google.maps/" />
import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Organisation } from '../models/organisation.model';
import { HttpClient } from '../../http-client';
import { MapGeocoder } from '@angular/google-maps';
import {} from 'google.maps';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, AfterViewInit {
  // make viewchild for map
  @ViewChild('map', {static: false}) gmap!: ElementRef;

  public currEvent!: event;
  private urlParams: number = 1;
  public eventIsLoaded: boolean = false;

  public eventEndTime: string = '';

  public eventLocStart: string = '';

  private allOrganisations!: Organisation[];
  public allOrgasLoaded: boolean = false;
  public currOrganisation!: Organisation;

  public map!: google.maps.Map;
  public display: any;
  public center: google.maps.LatLngLiteral = {lat: 48.8777194, lng: 2.408857};
  public zoom = 12;

  public markersPostions: google.maps.LatLngLiteral[] = [];
  public source!: google.maps.LatLngLiteral;
  public destination!: google.maps.LatLngLiteral;
  public place!: google.maps.LatLngLiteral;

  public ds!: google.maps.DirectionsService;
  public dr!: google.maps.DirectionsRenderer;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private geocoder: MapGeocoder,
    private cd: ChangeDetectorRef
  ) { 
    this.fetchOrganisations();
  }

  ngOnInit(): void {
    this.urlParams = parseInt(this.route.snapshot.params['id']);
    this.currEvent = this.eventService.getEventById(this.urlParams) || this.eventService.getDefaultEvent();
    this.eventEndTime = this.getEventEndTime(this.currEvent);
    this.eventIsLoaded = true;
    this.cd.detectChanges();
  }

  ngAfterViewInit(): void {
    this.initializeMap();
    this.cd.detectChanges();
  }

  private initializeMap(): void {
    // initialize map
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement,  {
      center: this.center,
      zoom: this.zoom,
    });
    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer();

    if (this.currEvent.event_place !== '' && this.currEvent.event_place !== undefined && this.currEvent.event_place !== null) {
      this.geocoder.geocode({address: this.currEvent.event_place}).subscribe((result) => {
        this.place = result.results[0].geometry.location.toJSON();
        this.map.setCenter(this.place);
        new google.maps.Marker({
          position: this.place,
          icon: {
            url: '../../icon.png',
            scaledSize: new google.maps.Size(50, 50),
          },
          map: this.map
        });
      });

    }

    if (this.currEvent.event_demonstrate_start_place !== '' && this.currEvent.event_demonstrate_start_place !== undefined && this.currEvent.event_demonstrate_start_place !== null) {
      this.geocoder.geocode({address: this.currEvent.event_demonstrate_start_place}).subscribe((result) => {
        this.source = result.results[0].geometry.location.toJSON();
        this.map.setCenter(this.source);
        new google.maps.Marker({
          position: this.source,
          icon: {
            url: '../../icon.png',
            scaledSize: new google.maps.Size(50, 50),
          },
          map: this.map
        });
      });
    }

    if (this.currEvent.event_demonstrate_end_place !== '' && this.currEvent.event_demonstrate_end_place !== undefined && this.currEvent.event_demonstrate_end_place !== null) {
      this.geocoder.geocode({address: this.currEvent.event_demonstrate_end_place}).subscribe((result) => {
        this.destination = result.results[0].geometry.location.toJSON();
        new google.maps.Marker({
          position: this.destination,
          icon: {
            url: '../../icon.png',
            scaledSize: new google.maps.Size(50, 50),
          },
          map: this.map
        });
        this.setRoutePolyline()
      });
    }
  }

  private setEventLocStart(): void {
    if (this.currEvent.event_place !== '' || this.currEvent.event_place !== undefined || this.currEvent.event_place !== null) {
      this.eventLocStart = this.currEvent.event_place;
    }
    if (this.currEvent.event_demonstrate_start_place !== '' || this.currEvent.event_demonstrate_start_place !== undefined || this.currEvent.event_demonstrate_start_place !== null) {
      this.eventLocStart = this.currEvent.event_demonstrate_start_place;
    }
  }

  private fetchOrganisations (): void {
    this.httpClient.getOrganisations().then((response: any) => {
      if (response !== null && response !== undefined) {
        this.allOrganisations = response as Organisation[];
        this.getOrganisationName(this.currEvent.event_organisation);
        this.allOrgasLoaded = true;
      }
    });
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }



  public getOrganisationName (orgId: number): void {
    this.allOrganisations.forEach((org: Organisation) => {
      if (org.organisation_id === orgId) {
        this.currOrganisation = org;
      }
    });
  }


  public getEventEndTime (event: event): string {
    let eventEndTime: string = '';
    let eventDurHour: number = parseInt(this.currEvent.event_duration.split(':')[0]);
    let eventDurMin: number = parseInt(this.currEvent.event_duration.split(':')[1]);
    let eventDurSec: number = parseInt(this.currEvent.event_duration.split(':')[2]);
    let eventDuration: number = (eventDurHour * 60) + eventDurMin + (eventDurSec / 60);
    let eventStartTime: Date = moment(event.event_time, 'HH:mm:ss').toDate();
    let eventEndTimeDate: Date = moment(eventStartTime.getTime() + eventDuration * 60000).toDate();
    eventEndTime = eventEndTimeDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
    return eventEndTime;
  }

  private setRoutePolyline (): void {
    if (this.source === undefined || this.source === null) {
      this.geocoder.geocode({ address: this.currEvent.event_place }).subscribe((result) => {
        this.source = result.results[0].geometry.location.toJSON();
      });  
    }
    if (this.destination === undefined || this.destination === null) {
      this.geocoder.geocode({ address: this.currEvent.event_demonstrate_start_place }).subscribe((result) => {
        this.destination = result.results[0].geometry.location.toJSON();
      });
    }
    setTimeout(() => {
      let request = {
        origin: this.source,
        destination: this.destination,
        travelMode: google.maps.TravelMode.WALKING
      };
      this.ds.route(request, (result, status) => {
        this.dr.setOptions({
          suppressMarkers: true,
          polylineOptions: {
            strokeColor: '#e21b17',
            strokeOpacity: 1,
            strokeWeight: 5,
            map: this.map
          },
          map: this.map
        })
        if (status === google.maps.DirectionsStatus.OK) {
          this.dr.setDirections(result);
        }
      });
    }, 500);
  }
}
