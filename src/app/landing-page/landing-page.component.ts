import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  fu0(){
    this._router.navigate(['landingpage']);
  }
  
  fu(){
    this._router.navigate(['login']);
  }

  fu2(){
    this._router.navigate(['register']);
  }
  fu3(){
    this._router.navigate(['flightsearch']);

  }

}
