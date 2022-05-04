import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterAPIService } from 'src/app/apis/register-api.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private service: RegisterAPIService, private storage: Storage, private alert: AlertController) { }

  ngOnInit() {
  }

  async getalert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'either your email or username has been taken',
      buttons: ['OK']
    });
    await alert.present();
  }
  async emptyalert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'You are missing some information!',
      buttons: ['OK']
    });
    await alert.present();
  }
  public onSubmit(form: NgForm){
    const user=form.value;
    this.service.addUser(user).subscribe(response=>{

      // eslint-disable-next-line max-len
      if(form.value.first_name==='' || form.value.last_name==='' || form.value.address==='' || form.value.email===''|| form.value.phone_number===''|| form.value.password==='' || form.value.username===''){
        this.emptyalert();
      }else{
          localStorage.setItem('username',String(response));
          this.router.navigate(['/home-page']);
        }
    });
  }
}
