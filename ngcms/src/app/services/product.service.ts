import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  public searchBS = new BehaviorSubject<Object>(null);

  search() {
    return this.http.get('http://localhost:63452/api/product');
  }

  searchs(college) {
    return this.http.get('http://localhost:63452/api/product/usercollege/' + college);
  }

  userdetail(owner) {
    return this.http.get('http://localhost:63452/api/product/user/' + owner);
  }

  postProduct(value) {
    return this.http.post('http://localhost:63452/api/product/add', value);
  }

  findProduct(value) {
    return this.http.get('http://localhost:63452/api/product/find/' + value);
  }

  deleteProduct(title, owner) {
    return this.http.delete('http://localhost:63452/api/product/delete/' + title + '/' + owner);
  }

  getEditProduct(id) {
    return this.http.get('http://localhost:63452/api/product/edit/' + id);
  }

}
