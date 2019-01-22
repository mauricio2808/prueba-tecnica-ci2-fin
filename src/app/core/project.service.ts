import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
  constructor(private httpClient: HttpClient, private _authService: AuthService) { }

  getProjects(): Observable<Project[]> {
      const accessToken = this._authService.getAccessToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
      return this.httpClient.get<Project[]>('https://securingangularappscourse-api.azurewebsites.net/api/Projects', { headers: headers });
  }
}
