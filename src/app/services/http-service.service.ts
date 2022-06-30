import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  // books = [
  //   {title: "The American Heritage History of the 20's & 30's", date: '1970', author: Array(1)},
  //   {title: 'Fiscal Regulations', date: '1915', author: Array(1)},
  //   {title: 'Monthly Bulletin', date: '1976', author: Array(1)},
  //   {title: 'היסטוריה דיפלומטית של המאה ה-20', date: '1996', author: Array(2)},
  //   {title: 'הנחיות לבנייה הממשלתית ...', date: '1969', author: Array(1)},
  //   {title: 'The Monthly Army List', date: '1924-07', author: Array(1)},
  //   {title: 'Low Rider', date: '2002', author: undefined},
  //   {title: "Montgomery's Federal Taxes", date: '1964', author: undefined},
  //   {title: 'גחלים באש ובמים', date: '1999', author: Array(1)},
  //   {title: 'The federal reporter', date: '1931', author: undefined},
  //  ]
  constructor(private http: HttpClient) { }
getBooks() {
  return this.http.get('https://www.googleapis.com/books/v1/volumes?printType=books&q=20')
}
}
