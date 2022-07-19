import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.component';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
flight : Flight =new Flight();
submitted=false;
  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit(){
    // this.flight.price=3232;
    
    
    
  }
  newFlight(): void{
    this.submitted=false;
   
    this.flight=new Flight();
  }
  addFlight() {
    this.flightService.addFlight(this.flight)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flight= new Flight();
    this.gotoList();
  }

  onSubmit() {
    this.submitted=true;
    this.addFlight();
  }

  gotoList() {
    this.router.navigate(['/flights']);
  }
}

