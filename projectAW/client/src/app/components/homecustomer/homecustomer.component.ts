import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homecustomer',
  templateUrl: './homecustomer.component.html',
  styleUrls: ['./homecustomer.component.css']
})
export class HomecustomerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
  booking(){
    this.router.navigate(['/booking']);
  }
  showbooking(){
    this.router.navigate(['/showbookinguser']);
  }
}
