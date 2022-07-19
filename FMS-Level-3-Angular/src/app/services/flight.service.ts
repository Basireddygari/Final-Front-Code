import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private Url = 'http://localhost:9092';
  private url1='http://localhost:9092/api/v1.0/flight/all'
  constructor(private http: HttpClient) { }
  getFlightsInfo(){
    return this.http.get(this.url1);
  }
  
  viewFlight(flightid: number): Observable<any> {
    return this.http.get(`${this.Url}/viewFlight/${flightid}`);
  }
  

  addFlight(flight: Object): Observable<Object> {
    return this.http.post('http://localhost:9092/api/v1.0/flight/airline/inventory/add', flight);
  }

  modifyFlight(id: number,value:any): Observable<Object> {
    return this.http.put(`${this.Url}/api/v1.0/flight/delete/${id}`, value);
  }

  removeFlight(id: number): Observable<any> {
    return this.http.delete(`${this.Url}/api/v1.0/flight/delete/${id}`, { responseType: 'text' });
  }

  viewAllFlight(): Observable<any> {
    return this.http.get(`${this.Url}/api/v1.0/flight/all`);
  }
  searchByPlace(origin:string, destination: string) {
    return this.http.get('http://localhost:9092/api/v1.0/flight/flight-search?origin='+origin+'&destination='+destination);
  }
 
}
