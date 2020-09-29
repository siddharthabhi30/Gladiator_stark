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
  constructor() 
  constructor() { }

  ngOnInit(): void {
  }
  fuu(a){
    this.selectedIndex=a;
    console.log(this.selectedIndex);
  }

}
