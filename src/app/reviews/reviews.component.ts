import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent{
  reviewForm : FormGroup;
  @Output() onReviewAdded: EventEmitter<any> = new EventEmitter();
  isOpened = false;

  constructor(private formBuilder: FormBuilder) {
    this.reviewForm = this.formBuilder.group({review: this.formBuilder.control('')});
  }

  onClick(){
    this.isOpened = !this.isOpened;
  }

  onSubmit(event: Event){
    this.onReviewAdded.emit(this.reviewForm.getRawValue().review);
    this.reviewForm.reset();
  }
}
