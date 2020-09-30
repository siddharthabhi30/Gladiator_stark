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
  constructor() { }

  ngOnInit(): void {
    console.log((this.selected.length))
  }
  list(val){
    console.log(val);
  }



}
