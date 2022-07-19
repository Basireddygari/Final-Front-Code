import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addScheduledFlight(): void{
    this.router.navigate(['scheduledFlight/add']);
  }

  viewScheduledFlight(): void{
    this.router.navigate(['scheduledFlight/show']);
  }

  searchScheduledFlight(): void{
      this.router.navigate(['scheduledFlight/search']);
  }

  modifyScheduledFlight(): void{
    this.router.navigate(['scheduledFlight/modify']);
  }

  addFlight(): void{
    this.router.navigate(['addFlight']);
  }
  searchflight(): void{
    this.router.navigate(['search']);
  }
  addBooking(): void{
    this.router.navigate(['addBooking']);
  }

  viewFlight(): void{
    this.router.navigate(['flights']);
  }
  viewBooking(): void{
    this.router.navigate(['bookings']);
  }
  addAirport(): void{
    this.router.navigate(['addAirport']);
  }
  deleteBooking(): void{
    this.router.navigate(['deleteBooking']);
  }
  emailBooking(): void{
    this.router.navigate(['email']);
  }
  pnrBooking(): void{
    this.router.navigate(['pnrr']);
  }

  viewAirport(): void{
    this.router.navigate(['airports']);
  }
  

}
