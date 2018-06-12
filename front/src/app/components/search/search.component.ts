import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  successMsg = false;
  successEnd = false;
  errorMsg = false;
  search: any;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  titleSearch(target) {
    this.productService.findProduct(target).subscribe(res => {
        this.search = res;
        this.successMsg = true;
        this.successEnd = true;
        setTimeout(function () {
          this.successMsg = false;
        }.bind(this), 2000);
    });
}



authorSearch(target) {
  this.productService.searchs(target).subscribe(res => {
    this.search = res;
    this.successMsg = true;
    this.successEnd = true;
    setTimeout(function () {
      this.successMsg = false;
    }.bind(this), 2000);
  });
}
}
