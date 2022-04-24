import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoginAPIService } from 'src/app/apis/login-api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private service: LoginAPIService, private storage: Storage, private alert: AlertController) { }

  ngOnInit() {
  }
  async getalert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'You entered a wrong username or password.Try Again',
      buttons: ['OK']
    });
    await alert.present();
  }
  public onSubmit(form: NgForm){
    const user=form.value;
    console.log(user);
    this.service.logingin(user).subscribe(response=>{
      console.log(response);
      if(response==null){
        console.log('error');
        this.getalert();
      }else{
        localStorage.setItem('username',String(response));
        this.router.navigate(['/home-page']);
      }
    });
 }
}
