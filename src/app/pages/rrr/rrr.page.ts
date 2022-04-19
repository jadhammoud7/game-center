import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rrr',
  templateUrl: './rrr.page.html',
  styleUrls: ['./rrr.page.scss'],
})
export class RrrPage implements OnInit {

  vid='https://www.youtube.com/embed/-o7rES_3ymA';
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
