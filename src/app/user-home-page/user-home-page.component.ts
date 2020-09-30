import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  
  bookedFlights(){
    this._router.navigate(['addflight']);
  }
 life(){
   //alert("you are fucking stupid ..you choose our airlines ,,what good can you achieve")
  }

}
