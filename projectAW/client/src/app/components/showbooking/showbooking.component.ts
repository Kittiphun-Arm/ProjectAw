import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {
  booking: any
  constructor(private shbooking: BookingService,private router:Router,private local:LocalStorageService) {
    this.onLoading();
  }

  ngOnInit(): void {
  }

  onLoading(){
    try {
      this.shbooking.getBooking().subscribe(
        data =>{
          this.booking = data;
          
        },
        err =>{
          console.log(err)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }
  
  logout(){
    alert('Your logout!')
    this.router.navigate(['/home']);
  }
  homeadmin(){
    this.router.navigate(['/homeadmin']);
  }
  showbooking(){
    this.router.navigate(['/showbooking']);
  }

  search(){
    this.router.navigate(['/search']);
  }

  deleteData(databooking) {
    this.shbooking.delete(databooking).subscribe(
      data => {
        console.log(data)
        alert('delete added successfully');
        this.onLoading();
      },
      err => {
        console.log(err);
      });
  }
}
