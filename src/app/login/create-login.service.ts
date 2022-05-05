import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';

@Injectable({
  providedIn: 'root',
})
export class CreateLoginService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }
}
