import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterAPIService {
private url='http://localhost:8080/GameCenter/';

  constructor(private http: HttpClient) { }
}
