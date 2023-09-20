import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { AuthorRowComponent } from './components/author-row/author-row.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthorModalComponent } from './components/author-modal/author-modal.component';
import { WorkRowComponent } from './components/work-row/work-row.component';
import { KeyPipe } from './pipes/work-pipe.pipe';
import { WorkModalComponent } from './components/work-modal/work-modal.component';
import { StringDatePipe } from './pipes/string-date.pipe';
import { CdatePipe } from './pipes/cdate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AuthorRowComponent,
    AuthorModalComponent,
    WorkRowComponent,
    KeyPipe,
    WorkModalComponent,
    StringDatePipe,
    CdatePipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
