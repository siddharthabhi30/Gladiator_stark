import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
const LoginComponents=[
  MatTabsModule
];


@NgModule({
  
  imports: [
    LoginComponents
  ],
  exports:[
    LoginComponents
  ]
})
export class LoginModuleModule { }
