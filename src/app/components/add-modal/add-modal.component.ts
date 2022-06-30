import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/model/book';
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent {
  book: Book = { _id: 0, title: '', date: '', author: undefined };
  @Output() closeAddingModal: EventEmitter<any> = new EventEmitter();
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  @Input() display: any;
  @Input() booksForDisplay: any;
  currYear = new Date().getFullYear().toString();
  isDateValid: boolean = true;
  isTitleExists: boolean = false;

  closeAddModal() {
    this.closeAddingModal.emit();
  }
  checkDateValidation(event: any) {
    if (event.target.value.length === 4 && event.target.value > this.currYear) {
      this.isDateValid = false;
    } else {
      this.isDateValid = true;
    }
  }
  onSubmit(form: any) {
    const newBookTitle = form.value.title;
    const currBookTitle = this.booksForDisplay.find(
      (item: { title: string }) =>
        item.title.toLowerCase() === newBookTitle.toLowerCase()
    );
    if (currBookTitle) {
      this.isTitleExists = true;
      return;
    }
    this.addBook.emit(form.value);
  }
}
