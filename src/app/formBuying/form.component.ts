import {Component, ElementRef, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  isOpened = false;
  buyingForm : FormGroup;
  @Output() onBuyingAdded: EventEmitter<any> = new EventEmitter();


  constructor(private formBuilder: FormBuilder) {
    this.buyingForm = this.formBuilder.group({buying: this.formBuilder.control('')});
  }

  onClick(){
    this.isOpened = !this.isOpened;
  }

  onSubmit(event: Event){
    this.onBuyingAdded.emit(this.buyingForm.getRawValue().buying);
    this.buyingForm.reset();
    this.isOpened = !this.isOpened;
  }

  openModal(){
    const name = document.getElementById("name") as HTMLInputElement;
    alert( name.value + ', thanks for your order.');
  }

}
