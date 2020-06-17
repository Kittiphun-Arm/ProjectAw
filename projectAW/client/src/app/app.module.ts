import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { from } from 'rxjs';
import { LoginmemberComponent } from './components/loginmember/loginmember.component';
import { MembersComponent } from './components/members/members.component';
import { HomecustomerComponent } from './components/homecustomer/homecustomer.component';
import { BookingComponent } from './components/booking/booking.component';
import { BorrowComponent } from './components/borrow/borrow.component';
import { ShowbookingComponent } from './components/showbooking/showbooking.component';
import { SearchComponent } from './components/search/search.component';
import { ShowbookinguserComponent } from './components/showbookinguser/showbookinguser.component';
import { RuleComponent } from './components/rule/rule.component';
import { ShowborrowComponent } from './components/showborrow/showborrow.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminComponent,
    LoginmemberComponent,
    MembersComponent,
    HomecustomerComponent,
    BookingComponent,
    BorrowComponent,
    ShowbookingComponent,
    SearchComponent,
    ShowbookinguserComponent,
    RuleComponent,
    ShowborrowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
