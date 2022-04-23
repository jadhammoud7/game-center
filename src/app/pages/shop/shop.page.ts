import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cdps3,Getcdps3Service } from 'src/app/apis/getcdps3.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
cdsps3: Cdps3[];
  constructor(private router: Router, private service: Getcdps3Service) { }

  ngOnInit() {
    this.service.getcdps3().subscribe(response=>{
      this.cdsps3=response;
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
