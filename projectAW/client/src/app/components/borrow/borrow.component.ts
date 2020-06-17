import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BorrowService } from 'src/app/services/borrow.service';
@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
  musicalInstrument: string[] = ['กีต้าร์โปร่งไฟฟ้า','กีต้าร์ไฟฟ้า','คีย์บอร์ด','กีต้าร์เบส'];
  timeIn: string[] = ['08.00 น.','09.00 น.','10.00 น.','11.00 น.','12.00 น.','13.00 น.','14.00 น.','15.00 น.','16.00 น.','17.00 น.','18.00 น.'];
  timeOut: string[] = ['09.00 น.','10.00 น.','11.00 น.','12.00 น.','13.00 น.','14.00 น.','15.00 น.','16.00 น.','17.00 น.','18.00 น.','19.00 น.'];
  
  dataForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    music: new FormControl(''),
    timein: new FormControl(''),
    timeout: new FormControl(''),
  });
  constructor(private router:Router,private bor: BorrowService) { }

  ngOnInit(): void {
  }
  addData(){
    console.log(this.dataForm.value)
    this.bor.addBorrow(this.dataForm.value).subscribe(
      data => {
        console.log(data)
          alert('ยืมสำเร็จ')
          this.dataForm.reset()
      },
      err => {
        console.log(err)
        alert('ยืมไม่สำเร็จ')
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
}
