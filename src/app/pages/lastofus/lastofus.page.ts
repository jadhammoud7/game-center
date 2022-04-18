import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lastofus',
  templateUrl: './lastofus.page.html',
  styleUrls: ['./lastofus.page.scss'],
})
export class LastofusPage implements OnInit {

  vid='https://www.youtube.com/embed/AaOWRvmtEFQ';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
