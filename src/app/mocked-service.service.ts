import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockedServiceService {
  constructor(private http: HttpClient) {}
  private readonly url = 'http://localhost:3000/items';
  private readonly headers: HttpHeaders = new HttpHeaders().set(
    'content-type',
    'application/json'
  );
  getCitiesBack(): Observable<string[]> {
    return this.http.get<string[]>(this.url, { headers: this.headers });
  }
}
