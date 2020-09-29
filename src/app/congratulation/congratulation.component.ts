import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {
  flip=true;
  hide=true;
  reduce=false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => 
    {
      this.flip=false;
    },
    0);
  }
  proceed(){
    this.hide=false;
    this.reduce=true;
  }

}
