import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SidebarService {

  constructor(

    private http: HttpClient
  ) { }

  getSidebar() {
    return this.http.get('http://localhost:63452/api/sidebar');
  }

  putSidebar(value) {
    return this.http.put('http://localhost:63452/api/sidebar/edit/', value);
  }
}
