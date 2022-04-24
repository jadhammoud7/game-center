import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Cdps4{
  name: string;
  type: string;
  price: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class Getcdps4Service {
  private url='http://localhost:8080/GameCenter/';
  constructor(private http: HttpClient) { }
  getCdps4(){
    return this.http.get<[Cdps4]>(this.url + 'getcdsps4.php');
  }
}
