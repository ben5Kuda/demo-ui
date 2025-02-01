import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:5006/weatherforecast';
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.apiUrl);
  }
}

export interface Weather {
  date: string;
  temperatureC: number;
  summary: string;
  temperatureF: number;
}
