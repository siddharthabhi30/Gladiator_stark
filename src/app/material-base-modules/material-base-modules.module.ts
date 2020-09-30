import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
const BaseComponents=[
  FormsModule,ReactiveFormsModule,MatButtonModule,MatToolbarModule
  
  
];

@NgModule({
 
  imports: [
    BaseComponents
  ],
  exports:[
    BaseComponents
  ]
})
export class MaterialBaseModulesModule { }
