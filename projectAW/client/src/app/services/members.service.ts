import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: any;
  constructor(private http: HttpClient,public local: LocalStorageService) { }
  addMembers(membersData){
    return this.http.post<any>('http://localhost:3000/members/members', membersData)
      .pipe(map(data => { 
        return data;
      }));
    }
    signIn(authData: any){
      return this.http.post<any>('http://localhost:3000/signinmembers/signinmembers', authData)
      .pipe(map(data => {
        if(data){
          this.local.set('members',data,1,'w');
          console.log(this.local.get('members'));
        }
        return data;
      }))
    }
    getMembers(){
      return this.http.get<any>('http://localhost:3000/members/members')
        .pipe(map(data => { 
          if (data) {
            this.members = data; 
            console.log(this.members);
          }
        return this.members;	
      }));
    }
}
