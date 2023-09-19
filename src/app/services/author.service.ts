import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorSearch } from '../models/dto/author-search';
import { baseUrl, limit } from './contants';
import { Observable } from 'rxjs';
import { AuthorDetails } from '../models/dto/author-details';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  searchAuthor(q: string, offset: number): Observable<AuthorSearch> {
    return this.http.get<AuthorSearch>(
      `${baseUrl}/search/authors.json?q=${q}&limit=${limit}&offset=${offset}`
    );
  }

  getAuthorDetails(key: string): Observable<AuthorDetails> {
    return this.http
      .get<AuthorDetails>(`${baseUrl}/authors/${key}.json`)
      .pipe();
  }
}
