import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Profile,ChangeProfileService } from 'src/app/apis/change-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string = localStorage.getItem('username');
  p: Profile[];
  constructor(private router: Router,private service: ChangeProfileService) { }
  ngOnInit() {

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
  form.value.username=this.username;
  const profile=form.value;
  console.log(profile);
  this.service.getProfile(profile).subscribe(response=>{
    console.log(profile);
  });
}
}


