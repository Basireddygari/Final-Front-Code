import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  submitted: false;
  email: any;
  booking: Booking;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.booking = new Booking();

    this.email = this.route.snapshot.params['email'];

    this.bookingService.getBooking(this.email)
    .subscribe(data => {
      console.log(data);
      this.booking = data;
      },
      error => console.log(error));
  }

  updateBooking() {
    this.bookingService.updateBooking(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
    this.booking = new Booking();
    this.gotoList();
  }

  onSubmit() {
    this.updateBooking();
  }

  gotoList() {
    this.router.navigate(['/bookings']);
  }
}
