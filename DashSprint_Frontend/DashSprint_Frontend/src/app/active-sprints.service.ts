import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveSprintService {
  private apiUrl = 'http://localhost:8080/sprint/all';  // Your endpoint

  constructor(private http: HttpClient) {}

  // Fetch all sprints and return the active ones
  getActiveSprints(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
