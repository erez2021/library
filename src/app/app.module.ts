import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksTableComponent } from './components/books-table/books-table.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { replacePipe } from './replacePipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksTableComponent,
    ModalComponent,
    AddModalComponent,
    replacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
