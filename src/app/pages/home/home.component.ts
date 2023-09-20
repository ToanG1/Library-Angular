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
  isLoading: boolean = false;

  constructor(private authorService: AuthorService) {
    const localData = window.localStorage['authors-data'];
    if (localData) {
      this.data = JSON.parse(localData);
      this.authors = this.data?.docs as DocAboutAuthor[];
      this.offset = (this.data?.start as number) + limit;
      this.pageFound = Math.ceil((this.data?.numFound as number) / limit);
      this.currentPage = this.offset / limit;
      this.searchString = window.localStorage['searchString'];
    }
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
    this.isLoading = true;
    this.authorService.searchAuthor(q, o).subscribe((res: any) => {
      this.data = res;
      this.authors = this.data?.docs as DocAboutAuthor[];
      this.offset = (this.data?.start as number) + limit;
      this.pageFound = Math.ceil((this.data?.numFound as number) / limit);
      this.currentPage = this.offset / limit;
      this.isLoading = false;
      window.localStorage.setItem('authors-data', JSON.stringify(this.data));
      window.localStorage.setItem('searchString', q);
    });
  }

  ngOnInit() {
    this.searchAuthorForm = new FormGroup({
      searchString: new FormControl(
        this.searchString || '',
        Validators.required
      ),
    });
    this.searchAuthorForm.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((res) => {
        this.searchString = res.searchString;
        this.searchAuthor(res.searchString, 0);
      });
  }
}
