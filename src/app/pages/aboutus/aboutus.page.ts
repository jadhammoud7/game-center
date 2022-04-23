import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommentsService } from 'src/app/apis/comments.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  username: string = localStorage.getItem('username');//getting the username from the local storage
  constructor(private router: Router,private service: CommentsService, private storage: Storage) { }

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
   const user=form.value;
   console.log(user);
   console.log(this.username);
   form.value.username=this.username;//putting username inside form.value.username since it is empty(i removed the input
   //from html so that i can use the logged in user)
   this.service.addNewComments(user).subscribe(response=>{
     this.router.navigate(['/shop']);
   });
}

}
