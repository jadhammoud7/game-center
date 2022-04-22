import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Users{
username: string;
password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {
  private url='http://localhost:8080/GameCenter/';

  constructor(private http: HttpClient) { }


  logingin(users: Users){
    console.log(JSON.stringify(users));
    return this.http.post(this.url + 'login.php', users);
  }
}

