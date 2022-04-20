import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from 'src/app/apis/comments.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
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
//bhot function w b2alba
//     this.service.addNewComments();

}
