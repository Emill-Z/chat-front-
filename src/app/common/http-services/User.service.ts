import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const path = 'http://localhost:3000';

@Injectable()
export class UserService {

  protected BASE_URL = '/api';

  constructor(public readonly httpClient: HttpClient) { }

  public get(): Observable<any> {
    return this.httpClient.get<any>(`${path}${this.BASE_URL}/me`);
  }
}
