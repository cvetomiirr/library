import {Component,  Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  commentForm : FormGroup;
  @Output() onCommentAdded: EventEmitter<any> = new EventEmitter();
  isOpened = false;

  constructor(private formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({comment: this.formBuilder.control('')});
  }

  onClick(){
    this.isOpened = !this.isOpened;
  }

  onSubmit(event: Event){
    this.onCommentAdded.emit(this.commentForm.getRawValue().comment);
    this.commentForm.reset();
  }
}
