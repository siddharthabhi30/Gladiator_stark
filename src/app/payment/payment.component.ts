import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  hide=true;
  hide_Container=false;
   value1 = 'Clear me';
   value2 = 'Clear me';
   value3= 'Clear me';
   value4 = 'Clear me';
   flip=false;
   panelOpenState = false;
   constructor(private _router:Router) { }
 our=1;
   ngOnInit(): void {
 
     setTimeout(() => 
     {
       this.our=1;
     },
     1000);
    
   }
 
 
   next(){
     this.hide=false;
     this.hide_Container=true;
     setTimeout(() => 
     {
       this.flip=true;
     },
     800);
     
     setTimeout(() => 
     {
       this._router.navigate(['congratulation']);
     },
     2000);
   }
 

}
