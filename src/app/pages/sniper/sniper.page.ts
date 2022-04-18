import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sniper',
  templateUrl: './sniper.page.html',
  styleUrls: ['./sniper.page.scss'],
})
export class SniperPage implements OnInit {

  vid='https://www.youtube.com/embed/7pSSnSrjQTI';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
