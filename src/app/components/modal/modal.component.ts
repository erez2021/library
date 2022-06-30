import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/model/book';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  book: Book = {
    _id: 0,
    title: '',
    date: '',
    author: undefined,
  };
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() saveBookDetails: EventEmitter<any> = new EventEmitter();
  @Input() display: any;
  @Input() bookToEdit: any;

  ngOnInit(): void {}

  closeEditModal() {
    this.closeModal.emit();
  }
  onSubmit(form: any) {
    let bookToSent = form.value;
    bookToSent._id = this.bookToEdit._id;
    this.saveBookDetails.emit(bookToSent);
  }
}
