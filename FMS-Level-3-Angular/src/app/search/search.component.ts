import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SerarchComponent implements OnInit {
  flightdetails:any[]=[];
  error:string;
  constructor(private _flightservice: FlightService, private router: Router) { }

  ngOnInit(): void {
  }
  search(origin:string, destination: string){
   this._flightservice.searchByPlace(origin, destination)
   .subscribe({
     next: (data:any)=>{
      console.log(data);  
       this.flightdetails=data;
       if(data){
        console.log(data);
        this.error=data;}
    else{
      this.error=data;
     

      }
         }
   })
  }

}
