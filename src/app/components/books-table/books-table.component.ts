import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
})
export class BooksTableComponent implements OnInit {
  @Input() books: any;

  bookToEdit: any;
  newBook: any;
  booksForDisplay: any;
  isEditModalOpen: boolean = false;
  isAddModalOpen: boolean = false;
  display = 'none';

  constructor() {}

  ngOnInit(): void {
    this.booksForDisplay = this.books.map(
      (book: { title: string; publishedDate: string; authors: any }) => {
        return {
          title: book.title,
          date: book.publishedDate,
          author: book.authors,
        };
      }
    );
    this.booksForDisplay.forEach((item: any, i: number) => {
      item._id = i + 1;
    });
    console.log(this.booksForDisplay);
  }
  openEditModal(book: Book) {
    this.isEditModalOpen = true;
    this.display = 'block';
    this.bookToEdit = book;
  }
  closeEditModal() {
    this.isEditModalOpen = false;
    this.display = 'none';
  }
  saveBookDetails(event: any) {
    const sentBook = event;
    const bookToEdit = this.booksForDisplay.findIndex(
      (item: { _id: number }) => item._id === sentBook._id
    );
    this.booksForDisplay.splice(bookToEdit, 1, sentBook);
    this.closeEditModal();
  }

  deleteBook(book: any) {
    let question = prompt(
      `Enter the word yes to delete the book - ${book.title}`
    );
    if (question?.toLowerCase() === 'yes') {
      const bookToDelete = this.booksForDisplay.findIndex(
        (item: { _id: number }) => item._id === book._id
      );
      this.booksForDisplay.splice(bookToDelete, 1);
    }
  }
  openAddModal() {
    this.isAddModalOpen = true;
    this.display = 'block';
  }
  closeAddModal() {
    this.isAddModalOpen = false;
    this.display = 'none';
  }
  addBook(event: object) {
    this.newBook = event;
    this.newBook._id =
      this.booksForDisplay[this.booksForDisplay.length - 1]._id + 1;
    this.booksForDisplay.push(this.newBook);
    this.closeAddModal();
  }
}
