import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
  showborrow(){
    this.router.navigate(['/showborrow']);
  }
  search(){
    this.router.navigate(['/search']);
  }
}
