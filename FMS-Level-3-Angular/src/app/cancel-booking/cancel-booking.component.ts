import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { Observable } from 'rxjs';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {
 booking:Booking;
  bookings: Observable<Booking[]>;
  submitted = false;
  pnr:string;
  constructor(private bookingService: BookingService, private router: Router) {}
  ngOnInit(): void {
   // this.reloadData();
  }
  

  reloadData() {
    //this.bookings = this.bookingService.getBookingsList();
   this.router.navigate(['/bookings']);
  }

  deleteBooking(pnr) {
    this.bookingService.deleteBooking(pnr)
    .subscribe(
      data=> {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

 
}
