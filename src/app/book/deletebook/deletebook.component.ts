import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookserviceService} from '../../service/bookservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  book: Book = {};
  id = -1;
  constructor(private bookService: BookserviceService,
              private activeRoute: ActivatedRoute)
  {
    this.activeRoute.paramMap.subscribe(paramMap=>{
      const id = +paramMap.get("id");
      this.id = id;
      this.getBookById(id);
    })
  }

  ngOnInit() {
  }

  getBookById(id: number){
    this.bookService.getBookById(id).subscribe(book=>{
      this.book = book;
    })
  }


  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(()=>{
      alert("Đốt thành công")
    },error => {
      alert("Đốt không được rồi!")
    })
  }
}
