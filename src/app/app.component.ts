import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'books-library';
  books: any;
  constructor(private httpService: HttpServiceService) {}
  ngOnInit() {
    return this.httpService.getBooks().subscribe((data: any) => {
      this.books = data.items.map(
        (book: { volumeInfo: any }) => book.volumeInfo
      );
    });
  }
}
