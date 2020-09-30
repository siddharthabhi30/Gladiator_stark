import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-matrix',
  templateUrl: './seat-matrix.component.html',
  styleUrls: ['./seat-matrix.component.css']
})
export class SeatMatrixComponent implements OnInit {
  total=3;
 cost=2000
  current=0;
  new=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
  old=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
  goForward=true;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  checker(){
    if(this.current!=this.total) {
      this.goForward=true;
    }
  }
change(n){
  this.checker();
  if(this.old[n]==1) return;
  if(this.new[n]==1){
    this.current--;
    this.new[n]=0;
    this.checker();
  }
  else{
    if(this.current==this.total) {
      this.goForward=false;
      this.checker();
      return;
  }
    this.current++;
    this.new[n]=1;
  }
  if(this.current==this.total) {
    this.goForward=false;
    return;
    this.checker();
}

}
pay(){
  this._router.navigate(['payment']);
}


}
