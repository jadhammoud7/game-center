import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mortal-combat',
  templateUrl: './mortal-combat.page.html',
  styleUrls: ['./mortal-combat.page.scss'],
})
export class MortalCombatPage implements OnInit {
vid='https://www.youtube.com/embed/mWytXS73aFI';
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
