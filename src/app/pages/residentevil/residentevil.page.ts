import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-residentevil',
  templateUrl: './residentevil.page.html',
  styleUrls: ['./residentevil.page.scss'],
})
export class ResidentevilPage implements OnInit {


  vid='https://www.youtube.com/embed/u3wS-Q2KBpk';
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
