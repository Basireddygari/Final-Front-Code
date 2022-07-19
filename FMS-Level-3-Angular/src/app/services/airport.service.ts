import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from '../model/airport.component';

@Injectable({
  providedIn: 'root'
})

export class AirportService{

  private baseUrl = 'http://localhost:9092';
  constructor(private httpClient:HttpClient){}

  //Returns list of all airports
  getAllAirports():Observable<Airport[]>{
      return this.httpClient.get<Airport[]>('http://localhost:9092/api/v1.0/flight/airline/all');
  }

  viewAirport(airlineid: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/viewAirport/${airlineid}`);
  }

  addAirport(airport: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/api/v1.0/flight/airline/register`,airport);
  }

  modifyAirport(airportCode: string, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/updateAirport`, value);
  }

  removeAirport(airportCode: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/deleteAirport/${airportCode}`, { responseType: 'text' });
  }

  viewAllAirport(): Observable<any> {
    return this.httpClient.get('http://localhost:9092/api/v1.0/flight/airline/all');
  }

}
