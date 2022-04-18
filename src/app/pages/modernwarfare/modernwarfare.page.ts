import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modernwarfare',
  templateUrl: './modernwarfare.page.html',
  styleUrls: ['./modernwarfare.page.scss'],
})
export class ModernwarfarePage implements OnInit {

  vid='https://www.youtube.com/embed/mtjkqrvUg_4';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
