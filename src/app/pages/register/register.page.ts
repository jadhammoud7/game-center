import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterAPIService } from 'src/app/apis/register-api.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private service: RegisterAPIService, private storage: Storage) { }

  ngOnInit() {
  }
  public onSubmit(form: NgForm){
    const user=form.value;
    this.service.addUser(user).subscribe(response=>{
      localStorage.setItem('username',String(response));
      this.router.navigate(['/home-page']);
    });
  }
}
