import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { Observable } from 'rxjs';
import { BookingService } from '../services/booking.service';
//import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-booking',
  templateUrl: './email-booking.component.html',
  styleUrls: ['./email-booking.component.css']
})
export class EmailBookingComponent implements OnInit {
  error:string;
  booking:Booking;
email:string;
  constructor(private bookingService: BookingService,private router: Router) { }

  ngOnInit(): void {
  }
 
  reloadData() {
    //this.bookings = this.bookingService.getBookingsList();
   this.router.navigate(['bookingDetails/:id']);
   //this.router.navigate(['/bookings']);
  }

  emailBooking(email) {
    this.bookingService.emailBooking(email)
    .subscribe(
      data=> {
        
        if(data){
          console.log(data);
          this.error=data;}
      else{
        this.error=data;
       
  
        }
      },
      error => console.log(error)
    );
  }



}