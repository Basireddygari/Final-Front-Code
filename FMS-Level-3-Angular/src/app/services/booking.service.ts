import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.component';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:9093/api/v1.0/flight';
  constructor(private http: HttpClient) { }

  getBooking(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/booking/history/${email}`);
  }
  createBooking(booking: Object,flightid:number){
    return this.http.post(`${this.baseUrl}/booking/${flightid}`,booking);
   }
  // createBooking(booking: Object){
  //   return this.http.post("http://localhost:9093/api/v1.0/flight/booking",booking);
  // }
  emailBooking(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/booking/history/${email}`);
  }
  pnrBooking(pnr: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ticket/${pnr}`);
  }
  updateBooking(booking: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateBooking`, booking);
  }

  deleteBooking(pnr: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/booking/cancel/${pnr}`, { responseType: 'text' });
  }

  getBookingsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fecthAllbookingDetails`);
  }
}
