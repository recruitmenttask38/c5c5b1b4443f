import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../intefaces/api.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get$<T = unknown>(url: string): Observable<ApiResponse<T>> {
    return this.http.get(`${environment.apiUrl}/${url}`);
  }
}
