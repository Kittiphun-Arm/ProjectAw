import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { HomeadminComponent } from './components/homeadmin/homeadmin.component';
import { BookingComponent } from './components/booking/booking.component';


const routes: Routes = [
  {path: 'signin' ,component:SigninComponent},
  {path: 'admin' ,component:AdminComponent},
  {path: 'home', component:HomeComponent},
  {path: 'homeadmin', component:HomeadminComponent},
  {path: 'booking', component:BookingComponent},
  {path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
