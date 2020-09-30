import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  fullName;
  test;
  foods= [
    {value: 'steak-0', viewValue: 'Patna'},
    {value: 'pizza-1', viewValue: 'Delhi'},
    {value: 'tacos-2', viewValue: 'Banglore'}
  ];
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  fu(){
    this.test=this.fullName.getDate();
    console.log(this.test);

  }

  forward(){
    this._router.navigate(['twowayflight']);
  }
  my(){
    console.log("this");
  }
  eco(){
    console.log("eco");
    console.log(this.fullName)

  }
  busi(){
    console.log("busi ")

  }

}
