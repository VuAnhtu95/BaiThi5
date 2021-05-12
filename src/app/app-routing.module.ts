import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatebookComponent} from './book/createbook/createbook.component';
import {ListbookComponent} from './book/listbook/listbook.component';
import {UpdatebookComponent} from './book/updatebook/updatebook.component';
import {DeletebookComponent} from './book/deletebook/deletebook.component';
import {ShowbookComponent} from './book/showbook/showbook.component';


const routes: Routes = [
  {
    path: 'books',
    component: ListbookComponent
  },
  {
    path: 'books/create',
    component: CreatebookComponent
  },
  {
    path: 'books/update/:id',
    component: UpdatebookComponent
  },
  {
    path: 'books/delete/:id',
    component: DeletebookComponent
  },
  {
    path: 'books/show/:id',
    component: ShowbookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
