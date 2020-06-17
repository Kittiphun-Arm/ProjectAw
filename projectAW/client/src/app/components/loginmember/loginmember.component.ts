import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
import { FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-loginmember',
  templateUrl: './loginmember.component.html',
  styleUrls: ['./loginmember.component.css']
})
export class LoginmemberComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(private router:Router,private members: MembersService) { }

  ngOnInit(): void {
  }
  signin(){
    console.log(this.authForm.value);
    this.members.signIn(this.authForm.value).subscribe(
      data => {
        if(data.status == true){
          alert('login success!');
          this.router.navigate(['/homecustomer']);
        }else{
          alert('Username or Password is incorrect!');
        }
      },
      err => {
        console.log(err);
        alert('Username or Password is incorrect!');
      });
  }

  signup(){
    this.router.navigate(['/members']);
    }
}
