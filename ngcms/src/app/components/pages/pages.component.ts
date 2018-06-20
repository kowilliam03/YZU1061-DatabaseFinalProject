import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { PageService } from './../../services/page.service';
import { SidebarService } from '../../services/sidebar.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  private param: any;
  private pageBody: any;
  public sidebar: string;
  public hasSidebar: boolean;
  public hasSearch: boolean;
  public search: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private pageService: PageService,
    private sidebarService: SidebarService,
    private searchService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['page'];

      if (this.param === undefined) {
        this.param = '/home';
        this.title.setTitle('CMS');
      } else {
        this.title.setTitle(this.param.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
      }

      this.pageService.getPage(this.param).subscribe(page => {
        if (page === 'PageNotFound') {
          this.router.navigateByUrl('');
        }

        if (this.param !== '/home') {
          this.searchService.searchs(this.param).subscribe(search => {
            this.search = search;
          });
        }

        this.pageBody = page['content'];

        if (page['hasSidebar'] === 'true') {
          this.hasSidebar = true;
          this.sidebarService.getSidebar().subscribe(sidebar => {
            this.sidebar = sidebar['content'];
          });
        } else {
          this.hasSidebar = false;
        }
      });
    });
  }

  showDetail() {
      this.searchService.search().subscribe(search => {
        this.search = search;
      });
  }

}
