import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFrameComponent } from './events-frame.component';

describe('EventsFrameComponent', () => {
  let component: EventsFrameComponent;
  let fixture: ComponentFixture<EventsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
