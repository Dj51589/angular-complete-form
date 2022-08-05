import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(environment.serverUrl + url);
  }

  post(url: string, payload = {}) {
    return this.http.post(url, payload);
  }
}
