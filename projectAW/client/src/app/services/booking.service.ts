import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  
  booking: any;

  constructor(private http: HttpClient,public local: LocalStorageService) { }

  addBooking(bookingData){
    return this.http.post<any>('http://localhost:3000/booking/booking', bookingData)
      .pipe(map(data => { 
        return data;
      }));
    }

    
  getBooking(){
    return this.http.get<any>('http://localhost:3000/booking/booking')
      .pipe(map(data => { 
        if (data) {
          this.booking = data; 
          console.log(this.booking);
        }
	    return this.booking;	
    }));
  }

  delete(databooking){
    return this.http.delete<any>('http://localhost:3000/booking/delete/'+databooking) 
  }
}
