import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blackops',
  templateUrl: './blackops.page.html',
  styleUrls: ['./blackops.page.scss'],
})
export class BlackopsPage implements OnInit {

  vid='https://www.youtube.com/embed/OPTOVQFRggI';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
