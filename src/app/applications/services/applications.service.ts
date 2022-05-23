import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private http: HttpClient) {
  }

  public getApplications(): Observable<any> {
    return this.http.get('assets/data/applications.json');
  }
}
