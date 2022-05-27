import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IApplication } from '../interfaces/application';
import { IManager } from '../interfaces/manager';

const MANAGER_API: string = 'http://localhost:3000/managers';
const APPLICATION_API: string = 'http://localhost:3000/applications';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private http: HttpClient) {}

  getApplications(ids: number[] = []): Observable<IApplication[]> {
    let url = APPLICATION_API;
    if (ids.length) {
      const params = new URLSearchParams();
      ids.forEach((id) => {
        params.append('id', `${id}`);
      });
      url = `${url}?${params.toString()}`;
    }

    return this.http.get<IApplication[]>(url);
  }

  getApplication(id: number): Observable<IApplication> {
    return this.http.get<IApplication>(`${APPLICATION_API}/${id}`);
  }

  getManager(id: number): Observable<IManager> {
    return this.http.get<IManager>(`${MANAGER_API}/1`);
  }

  updateManager(manager: IManager): Observable<IManager> {
    return this.http.put<IManager>(`${MANAGER_API}/1`, manager);
  }
}
