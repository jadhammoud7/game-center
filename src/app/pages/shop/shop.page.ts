import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
