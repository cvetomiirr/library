import { Injectable } from '@angular/core';
import {BOOKS} from "./mock-books";
import {BookComponent} from "./book.component";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor() { }

  printBooks(): BookComponent[]{
    return BOOKS;
  }
}
