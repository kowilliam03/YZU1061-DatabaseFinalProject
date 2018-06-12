import { HttpClientModule } from '@angular/common/http';
import { PageService } from './services/page.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SidebarService } from './services/sidebar.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagesComponent } from './components/pages/pages.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminAddPageComponent } from './components/admin-add-page/admin-add-page.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminNavbarComponent } from './component/admin-navbar/admin-navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FindComponent } from './components/find/find.component';
import { UserPagesComponent } from './components/user-pages/user-pages.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent },
  {path: 'search', component: SearchComponent },
  {path: 'list', component: ListComponent },
  {path: 'find', component: FindComponent },
  {path: 'edit/:id', component: UserEditComponent },
  {path: 'user', component: UserPagesComponent },
  {path: 'add', component: AddProductComponent },
  {path: 'show', component: PagesComponent },
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent },
  {path: 'admin/pages', component: AdminPagesComponent },
  {path: 'admin/add-page', component: AdminAddPageComponent },
  {path: 'admin/edit-page/:id', component: AdminEditPageComponent },
  {path: 'admin/sidebar', component: AdminSidebarComponent },
  {path: ':page', component: PagesComponent },
  {path: '', component: PagesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    AdminPagesComponent,
    AdminAddPageComponent,
    AdminEditPageComponent,
    AdminSidebarComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AdminNavbarComponent,
    AddProductComponent,
    FindComponent,
    UserPagesComponent,
    UserEditComponent,
    SearchComponent,
    ListComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PageService, SidebarService, UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
