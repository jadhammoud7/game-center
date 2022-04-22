import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  first_name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  last_name: string;
  address: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  phone_number: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterAPIService {
private url='http://localhost:8080/GameCenter/';

  constructor(private http: HttpClient) { }
  addUser(user: User){
    console.log(JSON.stringify(user));
    return this.http.post(this.url + 'register.php' , user);

  }
}
