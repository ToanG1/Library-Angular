import { Component, Input } from '@angular/core';
import { AuthorSearch, DocAboutAuthor } from 'src/app/models/dto/author-search';
import { AuthorService } from 'src/app/services/author.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { limit } from 'src/app/services/contants';
import { debounceTime, distinctUntilChanged } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchAuthorForm!: FormGroup;

  data?: AuthorSearch;
  authors: DocAboutAuthor[] = [];
  offset: number = 0;
  searchString: string = '';
  currentPage: number = 0;
  pageFound: number = 0;

  constructor(private authorService: AuthorService) {
    this.searchAuthorForm = new FormGroup({
      searchString: new FormControl('', Validators.required),
    });
    this.searchAuthorForm.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((res) => {
        this.searchAuthor(res.searchString, 0);
      });
  }

  OnSearchSubmit(value: any) {
    this.searchString = value.searchString;
    this.searchAuthor(this.searchString, 0);
  }

  OnBackWard() {
    this.offset = this.offset - 2 * limit;
    this.offset >= 0
      ? this.searchAuthor(this.searchString, this.offset)
      : (this.offset = 0);
  }
  OnForward() {
    this.currentPage < this.pageFound
      ? this.searchAuthor(this.searchString, this.offset)
      : null;
  }
  searchAuthor(q: string, o: number) {
    this.authorService.searchAuthor(q, o).subscribe((res: any) => {
      this.data = res;
      console.log(res);
      this.authors = this.data?.docs as DocAboutAuthor[];
      this.offset = (this.data?.start as number) + limit;
      this.pageFound = Math.ceil((this.data?.numFound as number) / limit);
      this.currentPage = this.offset / limit;
    });
  }

  ngOnInit() {}
}
