import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mortal-combat',
  templateUrl: './mortal-combat.page.html',
  styleUrls: ['./mortal-combat.page.scss'],
})
export class MortalCombatPage implements OnInit {
vid='https://www.youtube.com/embed/mWytXS73aFI';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
