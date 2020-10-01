import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  fullName;
  test;
  selected:string="";
  foods= [
    {value: 'steak-0', viewValue: 'Patna'},
    {value: 'pizza-1', viewValue: 'Delhi'},
    {value: 'tacos-2', viewValue: 'Banglore'}
  ];

  constructor(private fb:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    console.log((this.selected.length))
  }
  list(val){
    console.log(val);
  }
  addFlightForm=this.fb.group({
    flightNumber:['',Validators.required],
    source:['',Validators.required],
    destination:['',Validators.required],
    departureDate:['',Validators.required],
    arrivalDate:['',Validators.required],
    departureTime:['',Validators.required],
    arrivalTime:['',Validators.required]
    
  })
  forward(){
    console.log("fdf");
  this._router.navigate(['adminhomepage']);
}


}
