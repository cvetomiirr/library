import {Component} from '@angular/core';
import {BOOKS} from "./mock-books";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  id: number = 1;
  name : string = '';
  shortDescription : string = '';
  description: string = '';
  price : number = 1;
  reviews: any[] = [];
  comments: any[] = [];
  books : any[] = BOOKS;
  image: string = '';

  constructor( ) {
    const myBook = this.books.find(b => b.id === this.id);
    this.name = myBook.name;
    this.shortDescription = myBook.shortDescription;
    this.price = myBook.price;
    this.description = myBook.description;
    this.image = myBook.image;
  }

  newCommentAdded(event: Event){
    this.comments.push(event);
  }

  newReviewAdded(event: Event){
    this.reviews.push(event);
  }
}
