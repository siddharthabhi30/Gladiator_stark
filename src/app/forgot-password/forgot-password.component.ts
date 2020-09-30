import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
  }
  forgotPassword=this.fb.group({
    email:['',Validators.required]
    
  })
  forgotButton(){
    let adminEmail=this.forgotPassword.controls.email.value;

    this.forward();
  }
  forward(){
    this._router.navigate(['changepassword']);
  }
  

}
