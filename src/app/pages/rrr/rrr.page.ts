import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rrr',
  templateUrl: './rrr.page.html',
  styleUrls: ['./rrr.page.scss'],
})
export class RrrPage implements OnInit {

  vid='https://www.youtube.com/embed/-o7rES_3ymA';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
