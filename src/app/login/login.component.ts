import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value = '';
  value2='';
  show;
  selectedIndex=0;
  

 passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;
  constructor(private fb:FormBuilder,private _router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  fuu(a){
    this.selectedIndex=a;
    console.log(this.selectedIndex);
  }
  userLogin=this.fb.group({
    email:['',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:['',Validators.required]
  })
  adminLogin=this.fb.group({
    email:['',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',Validators.required]
  })

  userButton(){
    let userPassword=this.userLogin.controls.password.value;
    this.show=(this.passwordRegex.test(userPassword));
    console.log(this.show);
   
    if(this.userLogin.invalid){
      return this.openSnackBar();
    }
    if(this.show===false){
      return this.openSnackBar2();
     }
    let userEmail=this.userLogin.controls.email.value;
    
    this._router.navigate(['userhomepage']);

  }
  adminButton(){
    let adminPassword=this.adminLogin.controls.password.value;
    this.show=(this.passwordRegex.test(adminPassword));
    console.log(this.show);
   
    if(this.adminLogin.invalid){
      return this.openSnackBar();
    }
    if(this.show===false){
      return this.openSnackBar2();
     }
    let adminEmail=this.adminLogin.controls.email.value;
    this._router.navigate(['adminhomepage']);
  }

  openSnackBar() {
    this._snackBar.open("enter valid email", "ok", {
      duration: 2000,
    });
  }
  openSnackBar2() {
    this._snackBar.open("enter  password with uppercase and special character", "ok", {
      duration: 2000,
    });
  }

}
