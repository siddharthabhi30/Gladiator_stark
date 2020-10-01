import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-flight',
  templateUrl: './remove-flight.component.html',
  styleUrls: ['./remove-flight.component.css']
})
export class RemoveFlightComponent implements OnInit {

  constructor(private fb:FormBuilder,private _router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  removeFlight=this.fb.group({
    date:['',Validators.required],
    flightNumber:['',Validators.required]
   
  
  });
  removed(){
    console.log(this.removeFlight.invalid)
    if(this.removeFlight.invalid){
      return;
    }

    this.openSnackBar();
  }
  openSnackBar() {
    this._snackBar.open("flight has been removed", "ok", {
      duration: 1000,
    });
  }
  adminHome(){
    this._router.navigate(['adminhomepage']);
  }

}
