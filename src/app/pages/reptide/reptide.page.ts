import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reptide',
  templateUrl: './reptide.page.html',
  styleUrls: ['./reptide.page.scss'],
})
export class ReptidePage implements OnInit {

  vid='https://www.youtube.com/embed/mEmXLn7mSM8';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
