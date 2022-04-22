import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Comments{
  username: string;
  comment: string;
}
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
private url='http://localhost:8080/GameCenter/';

  constructor(private http: HttpClient) { }
  addNewComments(comment: Comments){
    console.log(JSON.stringify(comment));
    return this.http.post(this.url + 'comments.php', comment);
  }
}
