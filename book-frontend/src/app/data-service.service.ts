import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }


  getBooks() {
    return this.http.get('http://localhost:8081/api/books');
  }

  addBooks(author: string, title: string) {
    return this.http.get('http://localhost:8081/api/books/create/' + author + '/' + title );
  }
}
