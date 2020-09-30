import { PaymentModuleModule } from './payment-module/payment-module.module';
import { MatButtonModule } from '@angular/material/button';
import { LoginModuleModule } from './login-module/login-module.module';
import { RegistrationModuleModule } from './registration-module/registration-module.module';
import { MaterialBaseModulesModule } from './material-base-modules/material-base-modules.module';
import { FlightSearchModuleModule } from './flight-search-module/flight-search-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { RemoveFlightComponent } from './remove-flight/remove-flight.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
  routingComponent,
  AddFlightComponent,
  RemoveFlightComponent,
  AdminHomePageComponent


 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBaseModulesModule,
    FlightSearchModuleModule,
    RegistrationModuleModule,
    LoginModuleModule,
    PaymentModuleModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
