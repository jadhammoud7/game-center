import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cdps3,Getcdps3Service } from 'src/app/apis/getcdps3.service';
import {Cdps4,Getcdps4Service } from 'src/app/apis/getcdps4.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
cdsps3: Cdps3[];
cdsps4: Cdps4[];

  constructor(private router: Router, private serviceps3: Getcdps3Service,private serviceps4: Getcdps4Service) { }

  ngOnInit() {
    //ps3
    this.serviceps3.getcdps3().subscribe(response=>{
      this.cdsps3=response;
      console.log(this.cdsps3);
    });
    //ps4
    console.log('hello');
    this.serviceps4.getCdps4().subscribe(response=>{
      this.cdsps4=response;
      console.log(this.cdsps4);
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
gotoinfo(s: string){
  this.router.navigate(['/'+s]);
}
}
