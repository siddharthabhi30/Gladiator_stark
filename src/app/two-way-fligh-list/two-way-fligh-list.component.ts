import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-fligh-list',
  templateUrl: './two-way-fligh-list.component.html',
  styleUrls: ['./two-way-fligh-list.component.css']
})
export class TwoWayFlighListComponent implements OnInit {

  flip=false;
  list=[
    {
      fno:20,
      fname:"goair",
      fcost:2000
    },
    {
      fno:20,
      fname:"goair",
      fcost:2000
    },
    {
      fno:20,
      fname:"goair",
      fcost:2000
    },
    {
      fno:20,
      fname:"goair",
      fcost:2000
    },
    {
      fno:20,
      fname:"goair",
      fcost:2000
    }  
    ]
     selection=[0,0,0,0];
     forcard=0;
     new_height=false;
  constructor(private _router:Router) { }

  ngOnInit(): void {

    setTimeout(() => 
    {
      this.new_height=true;
    },
    300);
  }
  fu(){
    setTimeout(() => 
    {
      this.flip=true;
    },
    10);
    setTimeout(() => 
    {
      
      this._router.navigate(['seatmatrix']);
    },
    3700);
  }

}

