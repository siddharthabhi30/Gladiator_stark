import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  panelOpenState = false;
  name="sid"
  isLinear = true;
  foods= [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'miss', viewValue: 'Miss'},
    {value: 'mrs', viewValue: 'Mrs'}
  ];
  constructor(private fb:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
  }
  formGroup1=this.fb.group({
    title:['',Validators.required],
    firstname:['',Validators.required],
    lastname:[''],
    dateOfBirth:['',Validators.required]

  
  });
  
  formGroup2=this.fb.group({
    phoneNumber:['',[
      Validators.required,
      Validators.pattern("^[0-9]{10}$")]],
    email:['',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password:['',[Validators.required, Validators.minLength(8)]],
    confirmPassword:['',Validators.required]
  
  });
  forward(){
    if(this.formGroup2.invalid){
      return ;
    }
    this._router.navigate(['login']);
  }



    

}
