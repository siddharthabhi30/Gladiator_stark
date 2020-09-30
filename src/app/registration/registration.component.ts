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
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  formGroup1=this.fb.group({
    title:['',Validators.required],
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    dateOfBirth:['',Validators.required]

  
  });

  formGroup2=this.fb.group({
    email:['',Validators.required],
    password:['',[Validators.required, Validators.minLength(8)]],
    confirmPassword:['',Validators.required]
  
  });

  formGroup3=this.fb.group({
    securityQuestion:['',Validators.required],
    answer:['',Validators.required]
    
  
  });


    

}
