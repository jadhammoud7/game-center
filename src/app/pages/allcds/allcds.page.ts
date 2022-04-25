import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Getsinglecd,GetsinglecdService } from 'src/app/apis/getsinglecd.service';

@Component({
  selector: 'app-allcds',
  templateUrl: './allcds.page.html',
  styleUrls: ['./allcds.page.scss'],
})
export class AllcdsPage implements OnInit {
cd: Getsinglecd[];
s=localStorage.getItem('cd_name');
vid: any;
  constructor(private dom: DomSanitizer,private router: Router, private service: GetsinglecdService) { }

  ngOnInit() {
    this.service.singlecd(this.s).subscribe(response=>{
      this.cd=response;
      console.log(this.cd);
    });
  }
sanitize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
}
home(){
  this.router.navigate(['/home-page']);
}
shop(){
  this.router.navigate(['/shop']);
}
aboutus(){
  this.router.navigate(['/aboutus']);
}
profile(){
  this.router.navigate(['/profile']);
}

}
