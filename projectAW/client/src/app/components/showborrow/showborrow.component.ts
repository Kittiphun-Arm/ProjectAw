import { Component, OnInit } from '@angular/core';
import { BorrowService } from 'src/app/services/borrow.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-showborrow',
  templateUrl: './showborrow.component.html',
  styleUrls: ['./showborrow.component.css']
})
export class ShowborrowComponent implements OnInit {
  borrow:any;

  constructor(private shborrow: BorrowService,private router:Router,private local:LocalStorageService) { 
    this.onLoading();
  }

  ngOnInit(): void {
  }
  onLoading(){
    try {
      this.shborrow.getBorrow().subscribe(
        data =>{
          this.borrow = data;
          
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
  showborrow(){
    this.router.navigate(['/showborrow']);
  }
  

  search(){
    this.router.navigate(['/search']);
  }
  deleteData(databorrow) {
    this.shborrow.delete(databorrow).subscribe(
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
