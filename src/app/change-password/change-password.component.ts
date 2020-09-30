import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
  }
  changePass=this.fb.group({
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  })

  login(){
    this._router.navigate(['login']);
    let passwordEntered=this.changePass.controls.email.value;
    let confirmPasswordEntered=this.changePass.controls.password.value;
    console.log(passwordEntered,passwordEntered);


  }

}
