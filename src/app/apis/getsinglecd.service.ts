import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Getsinglecd{
  name: string;
  price: string;
  type: string;
  youtube: string;
}

@Injectable({
  providedIn: 'root'
})
//name
export class GetsinglecdService {
  private url='http://localhost:8080/GameCenter/';
  constructor(private http: HttpClient) { }
  singlecd(cdname: string){
    console.log(cdname);
    return this.http.get<[Getsinglecd]>(this.url + 'getSinglecd.php?name='+cdname);
  }
}
