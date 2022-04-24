import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Cdps5{
  name: string;
  type: string;
  price: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class Getcdps5Service {
  private url='http://localhost:8080/GameCenter/';
  constructor(private http: HttpClient) { }
  getCdps5(){
    return this.http.get<[Cdps5]>(this.url + 'getcdsps5.php');
  }
}
