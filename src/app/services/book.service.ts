import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl, limit } from './contants';
import { Observable } from 'rxjs';
import { AuthorWorks } from '../models/dto/author-works';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getWorks(key: string, offset: number): Observable<AuthorWorks> {
    return this.http.get<AuthorWorks>(
      `${baseUrl}/authors/${key}/works.json?limit=${limit}&offset=${offset}`
    );
  }
}
