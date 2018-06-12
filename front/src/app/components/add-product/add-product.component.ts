import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  successMsg = false;
  errorMsg = false;
  id: number;
  college: string;
  title: string;
  anthor: string;
  price: number;
  desc: string;
  connect: string;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('user') === null) {
      alert('請先登入!!');
      this.router.navigateByUrl('/login');
    }
  }

  addProduct({ value, valid }) {
    if (valid) {
      value.owner = localStorage.getItem('user');
      console.log(value);
      this.productService.postProduct(value).subscribe(res => {
        this.successMsg = true;
        setTimeout(function () {
          this.successMsg = false;
        }.bind(this), 2000);
        console.log(value);
      });

      this.productService.search().subscribe(product => {
        this.productService.searchBS.next(product);
      });
    }
  }

}
