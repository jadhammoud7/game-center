import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cdps3,Getcdps3Service } from 'src/app/apis/getcdps3.service';
import {Cdps4,Getcdps4Service } from 'src/app/apis/getcdps4.service';
import {Cdps5 ,Getcdps5Service } from 'src/app/apis/getcdps5.service';
import {Cdxbox ,GetcdxboxService } from 'src/app/apis/getcdxbox.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
cdsps3: Cdps3[];
cdsps4: Cdps4[];
cdsps5: Cdps5[];
cdsxbox: Cdxbox[];

  // eslint-disable-next-line max-len
  constructor(private router: Router, private serviceps3: Getcdps3Service,private serviceps4:
    Getcdps4Service, private serviceps5: Getcdps5Service, private servicexbox: GetcdxboxService, private alert:
     AlertController, private storage: Storage) { }

  ngOnInit() {
    localStorage.setItem('cd_name','');

    //ps3
    this.serviceps3.getcdps3().subscribe(response=>{
      this.cdsps3=response;
      console.log(this.cdsps3);
    });
    //ps4
    this.serviceps4.getCdps4().subscribe(response=>{
      this.cdsps4=response;
      console.log(this.cdsps4);
    });
    //ps5
    this.serviceps5.getCdps5().subscribe(response=>{
      this.cdsps5=response;
      console.log(this.cdsps5);
    });
    //xbox
    this.servicexbox.getCdxbox().subscribe(response=>{
      this.cdsxbox=response;
      console.log(this.cdsxbox);
    });

  }
  async getalert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Item Purchased',
      buttons: ['OK']
    });
    await alert.present();
  }
  buy(){
    this.getalert();
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

gotocd(s1: string){
  localStorage.setItem('cd_name',s1);
  console.log(s1);
  this.router.navigate(['/allcds']);
  //console.log(s1);
}
}
