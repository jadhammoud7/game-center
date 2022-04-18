import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-residentevil',
  templateUrl: './residentevil.page.html',
  styleUrls: ['./residentevil.page.scss'],
})
export class ResidentevilPage implements OnInit {


  vid='https://www.youtube.com/embed/u3wS-Q2KBpk';
  constructor(private dom: DomSanitizer) { }

  ngOnInit() {
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
}
