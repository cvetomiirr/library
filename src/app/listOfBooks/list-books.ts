import {Component, OnInit} from '@angular/core';
import {BOOKS} from '../book/mock-books'
import {BookComponent} from "../book/book.component";
import {BookService} from "../book/book.service";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.html',
  styleUrls: ['./list-books.component.css']
})

export class ListBooks implements OnInit{
    books : BookComponent[] = [];
    book : BookComponent = BOOKS[3];

    constructor(private bookService: BookService){
    }

    ngOnInit(): void {
      this.getListOfBooks();
    }

  onSelect(book: BookComponent){
      this.book = book;
    }

    getListOfBooks(){
      this.books = this.bookService.printBooks();
    }

}

