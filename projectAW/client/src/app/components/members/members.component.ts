import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/services/members.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  dataForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern('[0-9 ]{10}')]),
    gender: new FormControl('',[Validators.required]),
    file: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required]), 
    telephone: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
    address: new FormControl('',[Validators.required]),
    zip: new FormControl('',[Validators.required,Validators.pattern('[0-9]{5}')])
  });

  previewLoaded: boolean = false;

  constructor(private router:Router,private members: MembersService) { }

  ngOnInit(): void {
  }

  get firstname(){
    return this.dataForm.get('firstname');
  }
  get lastname(){
    return this.dataForm.get('lastname');
  }
  get username(){
    return this.dataForm.get('username');
  }
  get email(){
    return this.dataForm.get('email');
  }
  
  get password(){
    return this.dataForm.get('password');
  }
  get telephone(){
    return this.dataForm.get('telephone');
  }
  get address(){
    return this.dataForm.get('address');
  }
  get zip(){
    return this.dataForm.get('zip');
  }

  addmembers(){
    console.log(this.dataForm.value)
    this.members.addMembers(this.dataForm.value).subscribe( 
      data => {
        alert('Create your account successfully')
        this.dataForm.reset()
    },
    err => {
      console.log(err)
      alert('Username or Password is incorrect')
    })
  }
  onChangeImg(e:any){
    if (e.target.files.length > 0) { 
      const file = e.target.files[0]; 
      var pattern = /image-*/; 
      const reader = new FileReader();
      if (!file.type.match(pattern)) { 
        alert('invalid format'); 
        this.dataForm.reset();
      }else{
        reader.readAsDataURL(file); 
        reader.onload = () => { 
          this.previewLoaded = true; 
          this.dataForm.patchValue({ 
            img: reader.result 
          });
      };
      }
    }
  }
  resetForm(){
    this.dataForm.reset(); 
    this.previewLoaded = false;
  }
  back(){
    this.router.navigate(['/loginmember']);
  }

}
