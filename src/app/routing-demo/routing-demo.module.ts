import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { UserComponent } from '../reactive-form/user/user.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },// localhost:4200
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [HomeComponent,
    UsersComponent,
    CategoriesComponent,
    ContainerComponent]
})
export class RoutingDemoModule { }
