import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value = '';
  value2=''
  selectedIndex=0;
 
  constructor(private fb:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
  }
  fuu(a){
    this.selectedIndex=a;
    console.log(this.selectedIndex);
  }
  userLogin=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })
  adminLogin=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  userButton(){
    let userEmail=this.userLogin.controls.email.value;
    let userPassword=this.userLogin.controls.password.value;
    
    this._router.navigate(['userhomepage']);

  }
  adminButton(){
    let adminEmail=this.adminLogin.controls.email.value;
    let adminPassword=this.adminLogin.controls.password.value;
    this._router.navigate(['adminhomepage']);
  }

}
