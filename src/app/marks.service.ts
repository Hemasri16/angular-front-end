import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Marks } from './marks';

@Injectable({
  providedIn: 'root'
})

export class MarksService {  
  
  private baseUrl = 'http://localhost:8080/Project_01-Rest/api/marks';  
  
  constructor(private http:HttpClient) { }  
  
  getMarks(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMarks(marks: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, marks);
  }

  updateMarks(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMarks(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMarksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
