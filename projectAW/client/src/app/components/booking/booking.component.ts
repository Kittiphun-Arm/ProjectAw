import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  roomType: string[] = ['ห้องซ้อมที่ 1','ห้องซ้อมที่ 2','ห้องซ้อมที่ 3','ห้องซ้อมที่ 4','ห้องซ้อมที่ 5','ห้องซ้อมที่ 6','ห้องซ้อมที่ 7','ห้องซ้อมที่ 8','ห้องซ้อมที่ 9','ห้องซ้อมที่ 10'];
  timein: string[] = ['08.00 น.','09.00 น.','10.00 น.','11.00 น.','12.00 น.','13.00 น.','14.00 น.','15.00 น.','16.00 น.','17.00 น.','18.00 น.'];
  timeout: string[] = ['09.00 น.','10.00 น.','11.00 น.','12.00 น.','13.00 น.','14.00 น.','15.00 น.','16.00 น.','17.00 น.','18.00 น.','19.00 น.'];
  
  dataForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    typeintime: new FormControl('',[Validators.required]),
    typeouttime: new FormControl('',[Validators.required]),
    numberpeople: new FormControl('',[Validators.required])
  });
  constructor(private router:Router,private booki: BookingService) { }

  ngOnInit(): void {
  }

  addData(){
    console.log(this.dataForm.value)
    this.booki.addBooking(this.dataForm.value).subscribe(
      data => {
        console.log(data)
          alert('จองห้องสำเร็จ')
          this.dataForm.reset()
      },
      err => {
        console.log(err)
        alert('จองห้องไม่สำเร็จ')
      })
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
