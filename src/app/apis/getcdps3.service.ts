import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Cdps3{
  name: string;
  type: string;
  price: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class Getcdps3Service {
  private url='http://localhost:8080/GameCenter/';
  constructor(private http: HttpClient) { }
  getcdps3(){
    return this.http.get<[Cdps3]>(this.url + 'getcdps3.php');
  }
}
