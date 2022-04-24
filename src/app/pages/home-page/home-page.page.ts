import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cd,GetRamdonToPageService } from 'src/app/apis/get-ramdon-to-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
cd: Cd[];
  constructor(private router: Router,private service: GetRamdonToPageService) { }

  ngOnInit() {
    this.service.getRandom().subscribe(response=>{
      this.cd=response;
      console.log(this.cd);
    });
  }
buy(){
  alert('This product is purchased');
}
home(){
  this.router.navigate(['/home-page']);
}
shop(){
  this.router.navigate(['/shop']);
}
aboutus(){
  this.router.navigate(['/aboutus']);
}
profile(){
  this.router.navigate(['/profile']);
}
}
