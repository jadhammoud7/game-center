import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clank',
  templateUrl: './clank.page.html',
  styleUrls: ['./clank.page.scss'],
})
export class ClankPage implements OnInit {
vid='https://www.youtube.com/embed/55PRv_e00wc';
  constructor(private dom: DomSanitizer,private router: Router) { }

  ngOnInit() {
  }
  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
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
}
