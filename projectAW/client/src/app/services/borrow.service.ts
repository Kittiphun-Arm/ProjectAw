import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-web-storage';
@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor(private http: HttpClient,public local: LocalStorageService) { }
  addBorrow(borrowData){
    return this.http.post<any>('http://localhost:3000/borrow/borrow', borrowData)
      .pipe(map(data => { 
        return data;
      }));
    }

}
