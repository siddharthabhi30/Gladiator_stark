import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otp:string="";
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  forward(){
    this._router.navigate(['login']);
  }

}
