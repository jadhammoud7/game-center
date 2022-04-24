import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Cdxbox{
  name: string;
  type: string;
  price: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class GetcdxboxService {

  private url='http://localhost:8080/GameCenter/';
  constructor(private http: HttpClient) { }
  getCdxbox(){
    return this.http.get<[Cdxbox]>(this.url + 'getcdsxbox.php');
  }
}
