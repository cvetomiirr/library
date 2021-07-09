import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListBooks } from './listOfBooks/list-books';
import { FormComponent } from './formBuying/form.component';
import { AppRoutingModule } from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BookComponent } from './book/book.component';
import { CommentsComponent } from './comments/comments.component';
import { ReviewsComponent } from './reviews/reviews.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListBooks,
    BookComponent,
    CommentsComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
