import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-batman',
  templateUrl: './batman.page.html',
  styleUrls: ['./batman.page.scss'],
})
export class BatmanPage implements OnInit {

  vid='https://www.youtube.com/embed/9pnK8akbd2M';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
