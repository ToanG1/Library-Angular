import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { limit } from 'src/app/services/contants';
import { BookService } from 'src/app/services/book.service';
import { AuthorWorks } from 'src/app/models/dto/author-works';
import { WorksEntry } from 'src/app/models/dto/works-entry';
import { AuthorService } from 'src/app/services/author.service';
import { AuthorDetails } from 'src/app/models/dto/author-details';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  authorKey: string = '';
  author!: AuthorDetails;
  searchWorkForm!: FormGroup;

  data!: AuthorWorks;
  works!: WorksEntry[];
  offset: number = 0;
  searchString: string = '';
  currentPage: number = 0;
  pageFound: number = 0;

  OnSearchSubmit(value: any) {
    this.searchString = value.searchString;
    this.searchWork(this.searchString, 0);
  }

  OnWorksBackWard() {
    console.log('back');
    this.offset = this.offset - 2 * limit;
    this.offset >= 0
      ? this.searchWork(this.authorKey, this.offset)
      : (this.offset = 0);
  }
  OnWorksForward() {
    console.log('next');
    this.currentPage < this.pageFound
      ? this.searchWork(this.authorKey, this.offset)
      : null;
  }

  searchWork(q: string, o: number) {
    this.bookService.getWorks(q, o).subscribe((res: any) => {
      this.data = res;
      this.works = this.data?.entries as WorksEntry[];
      this.offset = o + limit;
      this.pageFound = Math.ceil((this.data?.size as number) / limit);
      this.currentPage = this.offset / limit;
    });
  }

  ngOnInit() {
    this.searchWorkForm = new FormGroup({
      searchString: new FormControl('', Validators.required),
    });

    this.route.queryParams.subscribe((params) => {
      this.authorKey = params['authorKey'];
    });

    this.authorService
      .getAuthorDetails(this.authorKey)
      .subscribe((res: any) => {
        this.author = res;
        console.log(this.author);
      });

    this.searchWork(this.authorKey, 0);
  }
}
