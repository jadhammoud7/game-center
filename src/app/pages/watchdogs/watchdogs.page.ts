import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-watchdogs',
  templateUrl: './watchdogs.page.html',
  styleUrls: ['./watchdogs.page.scss'],
})
export class WatchdogsPage implements OnInit {

  vid='https://www.youtube.com/embed/PFko4Kut39s';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
