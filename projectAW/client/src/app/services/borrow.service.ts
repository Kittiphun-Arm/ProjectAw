import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  borrow: any;
  constructor(private http: HttpClient,public local: LocalStorageService) { }
  addBorrow(borrowData){
    return this.http.post<any>('http://localhost:3000/borrow/borrow', borrowData)
      .pipe(map(data => { 
        return data;
      }));
    }

    getBorrow(){
      return this.http.get<any>('http://localhost:3000/borrow/borrow')
        .pipe(map(data => { 
          if (data) {
            this.borrow = data; 
            console.log(this.borrow);
          }
        return this.borrow;	
      }));
    }
    delete(databorrow){
      return this.http.delete<any>('http://localhost:3000/borrow/delete/'+databorrow) 
    }
}
