import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const BaseComponents=[
  FormsModule,ReactiveFormsModule,MatButtonModule
  
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
