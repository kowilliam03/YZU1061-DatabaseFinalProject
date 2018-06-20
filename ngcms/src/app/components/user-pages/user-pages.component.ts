import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { identifierModuleUrl } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-pages',
  templateUrl: './user-pages.component.html',
  styleUrls: ['./user-pages.component.css']
})
export class UserPagesComponent implements OnInit {

  user: any;
  successMsg = false;
  username: string;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('user').replace(/\"/g, '');
    if (this.username === null) {
      this.router.navigateByUrl('/login');
    }

    this.user = this.productService.searchBS;
    this.productService.userdetail(this.username).subscribe(res => {
      if (res === 'NoUsedBook') {
        alert('沒有資料!');
      } else {
        this.user = res;
      }
    });
  }

  deleteProduct(title , owner) {
    if (confirm('Confirm deletion')) {
      this.productService.deleteProduct(title, owner).subscribe(res => {
        this.successMsg = true;
        setTimeout(function () {
          this.successMsg = false;
        }.bind(this), 2000);

        this.productService.userdetail(localStorage.getItem('user').replace(/\"/g, '')).subscribe(pages => {
          this.router.navigateByUrl('/user');
        });
      });
    }

  }

}
