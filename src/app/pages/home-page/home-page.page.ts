import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cd,GetRamdonToPageService } from 'src/app/apis/get-ramdon-to-page.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
cd: Cd[];
  constructor(private router: Router,private service: GetRamdonToPageService, private alert: AlertController, private storage: Storage) { }

  ngOnInit() {
    this.service.getRandom().subscribe(response=>{
      this.cd=response;
      console.log(this.cd);
    });
  }
  async getalert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Item Purchased!',
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
  this.router.navigate(['/allcds']);
  //console.log(s1);
}
}
