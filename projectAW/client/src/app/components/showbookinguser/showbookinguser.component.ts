import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-showbookinguser',
  templateUrl: './showbookinguser.component.html',
  styleUrls: ['./showbookinguser.component.css']
})
export class ShowbookinguserComponent implements OnInit {

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

  homecustomer(){
    this.router.navigate(['/homecustomer']);
  }

  borrow(){
    this.router.navigate(['/borrow']);
  }
  bookings(){
    this.router.navigate(['/booking']);
  }
  showbooking(){
    this.router.navigate(['/showbookinguser']);
  }
}
