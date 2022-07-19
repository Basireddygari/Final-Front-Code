import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { Observable } from 'rxjs';
import { BookingService } from '../services/booking.service';
//import { Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pnr-booking',
  templateUrl: './pnr-booking.component.html',
  styleUrls: ['./pnr-booking.component.css']
})
export class PnrBookingComponent implements OnInit {
  error:string;
  booking:Booking;
pnr:string;
  constructor(private bookingService: BookingService,private router: Router) { }

  ngOnInit(): void {
  }
 
  reloadData() {
    //this.bookings = this.bookingService.getBookingsList();
   this.router.navigate(['bookingDetails/:id']);
   //this.router.navigate(['/bookings']);
  }

  pnrBooking(pnr) {
    this.bookingService.pnrBooking(pnr)
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