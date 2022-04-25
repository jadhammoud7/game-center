import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Profile,ChangeProfileService } from 'src/app/apis/change-profile.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string = localStorage.getItem('username');
  p: Profile[];
  constructor(private router: Router,private service: ChangeProfileService, private storage: Storage, private alert: AlertController) { }
  ngOnInit() {

  }
  async getalert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'You are missing some information!',
      buttons: ['OK']
    });
    await alert.present();
  }
  async donealert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Your profile information are saved and secured!',
      buttons: ['OK']
    });
    await alert.present();
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
public onSubmit(form: NgForm){
  // eslint-disable-next-line max-len
  if(form.value.first_name==='' || form.value.last_name==='' || form.value.address==='' || form.value.email===''|| form.value.phone_number===''|| form.value.password===''){
    this.getalert();
  }else{
    form.value.username=this.username;
    const profile=form.value;
    console.log(profile);
    this.service.getProfile(profile).subscribe(response=>{
      console.log(profile);
      this.donealert();
    });
  }
}

logout(){
  localStorage.setItem('username',null);
  this.router.navigate(['/login']);
}

}


