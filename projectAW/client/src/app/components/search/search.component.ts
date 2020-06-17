import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  members: any
  constructor(private router:Router,private member: MembersService) { }

  ngOnInit(): void {
    this.onLoading()
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

  onLoading(){
    try {
      this.member.getMembers().subscribe(
        data => {
          this.members = data;
      },
        err =>{
          console.log(err)
        });
    }catch (error) {
	    console.log(error)	
    }
  }
}
