import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBookingComponent } from './email-booking.component';

describe('CreateBookingComponent', () => {
  let component: EmailBookingComponent;
  let fixture: ComponentFixture<EmailBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
