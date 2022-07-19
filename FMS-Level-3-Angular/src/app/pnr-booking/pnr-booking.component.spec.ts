import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { EmailBookingComponent } from './email-booking.component';
import { PnrBookingComponent} from './pnr-booking.component';
describe('CreateBookingComponent', () => {
  let component: PnrBookingComponent;
  let fixture: ComponentFixture<PnrBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnrBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnrBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
