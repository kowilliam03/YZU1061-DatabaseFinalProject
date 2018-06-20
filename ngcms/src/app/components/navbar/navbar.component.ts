import { PageService } from './../../services/page.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pages: any;
  user: string;
  SearchBox = 'hidden';
  checkBtn = false;
  private target: string;

  get userLoggedIn() {
    if (localStorage.getItem('user')) {
      this.user = localStorage.getItem('user').replace(/\"/g, '');
      return true;
    }
    return false;
  }

  constructor(
    public pageService: PageService,
    private router: Router
  ) { }

  @Input() targetMsg;
  @Output() targetAns: EventEmitter<any> = new EventEmitter<any>();



  ngOnInit() {
    this.pageService.getPages().subscribe(pages => {
      this.pageService.pagesBS.next(pages);
      this.pages = this.pageService.pagesBS;
    });
    this.target = this.targetMsg;
    if (localStorage.getItem('user') === null) {
      alert('請先登入!!');
      this.router.navigateByUrl('/login');
    }
  }

  search() {
    this.router.navigateByUrl('/search');
  }

  checklogin() {
    if (localStorage.getItem('user') === null) {
      alert('請先登入，再上架!!');
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/add');
    }
  }

  find(target) {
    this.target = target;
    this.targetAns.emit(this.target);
    this.router.navigateByUrl('/find');
  }
  gotoList() {
    this.router.navigateByUrl('/list');
  }
}
