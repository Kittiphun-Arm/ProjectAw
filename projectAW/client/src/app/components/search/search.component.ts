import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

  search(){
    this.router.navigate(['/search']);
  }
}
