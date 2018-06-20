import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  product: any;
  param: any;

  college: string;
  title: string;
  author: string;
  price: number;
  desc: string;
  connect: string;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('user') === null) {
      alert('請先登入!!');
      this.router.navigateByUrl('/');
    }
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.productService.getEditProduct(this.param).subscribe(product => {
        this.college = product['college'];
        this.title = product['title'];
        this.author = product['author'];
        this.price = product['price'];
        this.desc = product['desc'];
        this.connect = product['connect'];
      });
    });
  }

  editProduct({value, valid}) {

  }

}
