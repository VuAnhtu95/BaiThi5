import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookserviceService} from '../../service/bookservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  bookFrom : FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number = -1;
  constructor(private bookService: BookserviceService,
              private activatedRoute: ActivatedRoute)
  {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const id = +paramMap.get("id");
      this.id = id;
      this.getBookById(id);
    })
  }

  ngOnInit() {
  }

  updateBook(id:number){
    let thisBook = this.bookFrom.value;
    this.bookService.updateBook(thisBook,id).subscribe(()=>{
      alert("update thành công");
    },error => {
      alert(error);
    })
  }

  getBookById(id: number){
    this.bookService.getBookById(id).subscribe(book => {
      this.bookFrom = new FormGroup({
        id: new FormControl(book.id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      })
    })
  }
}
