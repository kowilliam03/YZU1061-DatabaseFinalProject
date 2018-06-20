import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(user) {
    return this.http.post('http://localhost:63452/api/users/register', user);
  }

  login(user) {
    return this.http.post('http://localhost:63452/api/users/login', user);
  }
}
