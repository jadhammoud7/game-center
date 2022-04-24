import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Cd{
  name: string;
  type: string;
  price: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetRamdonToPageService {
  private url='http://localhost:8080/GameCenter/';
  constructor(private http: HttpClient) { }
  getcdps3(){
    return this.http.get<[Cd]>(this.url + '.php');
  }
}
