import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.page.html',
  styleUrls: ['./ghost.page.scss'],
})
export class GhostPage implements OnInit {

  vid='https://www.youtube.com/embed/Zbq7BnsQhrw';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
