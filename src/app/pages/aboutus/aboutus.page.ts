import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentsService } from 'src/app/apis/comments.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {


registrationForm=this.formbuilder.group({
  email: [''],
  comment: ['']
});


  constructor(private router: Router, private formbuilder: FormBuilder, private service: CommentsService) { }

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
submit(){
  console.log(this.registrationForm.value);
  console.log(this.registrationForm.value.email);
  // this.router.navigate(['/home-page']);
  this.service.addNewComments(this.registrationForm.value);
}

}
