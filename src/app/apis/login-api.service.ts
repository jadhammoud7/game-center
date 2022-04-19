import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


// eslint-disable-next-line @typescript-eslint/naming-convention
export interface users{
username: string;
password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {
  private url='http://localhost:8080/GameCenter/';

  constructor(private http: HttpClient) { }


  logingin(){
    return this.http.get<[users]>(this.url + 'login.php');
  }
}

