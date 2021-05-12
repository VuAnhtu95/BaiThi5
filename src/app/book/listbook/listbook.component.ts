import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../service/bookservice.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookserviceService) {}

  ngOnInit() {
    this.getAllBook();
  }
  getAllBook(){
    this.bookService.getAllBook().subscribe(books=>{
      this.books = books
    })
  }
}
