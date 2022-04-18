import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hitman',
  templateUrl: './hitman.page.html',
  styleUrls: ['./hitman.page.scss'],
})
export class HitmanPage implements OnInit {

  vid='https://www.youtube.com/embed/LVqxMCZ3u6k';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
