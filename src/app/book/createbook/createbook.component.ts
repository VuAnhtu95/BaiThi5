import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookserviceService} from '../../service/bookservice.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {
  book: Book = {}

  constructor(private bookService: BookserviceService) { }

  ngOnInit() {
  }

  addBook(form: NgForm) {
    let newBook = form.value;
    this.bookService.createBook(newBook).subscribe(()=>{
      alert("Tạo thành công");
      this.book = {}
    },error => {
      alert("Thất bại rồi tiếc quá")
    })
  }
}
