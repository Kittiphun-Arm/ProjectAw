import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dataForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    zip: new FormControl('',[Validators.required])
  });
  previewLoaded: boolean = false;

  constructor(private router:Router,private auth: AuthService) { }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.dataForm.value)
    this.auth.signUp(this.dataForm.value).subscribe(
      data => {
          console.log(data)
          alert('Create your account successfully')
          this.dataForm.reset()
      },
      err => {
        console.log(err)
        alert('Username or Password is incorrect')
      })
  }

  back(){
    this.router.navigate(['/signin']);
  }
}
