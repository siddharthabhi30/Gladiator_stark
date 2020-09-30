import { TwoWayFlighListComponent } from './two-way-fligh-list/two-way-fligh-list.component';
import { OtpComponent } from './otp/otp.component';
import { SeatMatrixComponent } from './seat-matrix/seat-matrix.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CongratulationComponent } from './congratulation/congratulation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightSelectComponent } from './flight-select/flight-select.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'flightsearch',component:FlightSearchComponent},
  {path:'flighselect',component:FlightSelectComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LandingPageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'congratulation',component:CongratulationComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'changepassword',component:ChangePasswordComponent},
  {path:'addflight',component:AddFlightComponent},
  {path:'removeflight',component:RemoveFlightComponent},
  {path:'adminhomepage',component:AdminHomePageComponent},
  {path:'userhomepage',component:UserHomePageComponent},
  {path:'seatmatrix',component:SeatMatrixComponent},
  {path:'otp',component:OtpComponent},
  {path:'twowayflight',component:TwoWayFlighListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LandingPageComponent,FlightSelectComponent,FlightSearchComponent
  ,RegistrationComponent,LoginComponent,PaymentComponent
  ,CongratulationComponent,ForgotPasswordComponent,ChangePasswordComponent,AdminHomePageComponent
,RemoveFlightComponent,AddFlightComponent,UserHomePageComponent, SeatMatrixComponent,  TwoWayFlighListComponent,  OtpComponent]