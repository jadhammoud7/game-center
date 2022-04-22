import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommentsService } from 'src/app/apis/comments.service';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {


  constructor(private router: Router,private service: CommentsService) { }

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
   this.service.addNewComments(user).subscribe(response=>{
     this.router.navigate(['/shop']);
   });
}

}
