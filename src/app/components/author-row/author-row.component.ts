import { Component, Input } from '@angular/core';
import { DocAboutAuthor } from '../../models/dto/author-search';

@Component({
  selector: 'app-author-row',
  templateUrl: './author-row.component.html',
  styleUrls: ['./author-row.component.scss'],
})
export class AuthorRowComponent {
  @Input()
  author!: DocAboutAuthor;

  isModalVisible: boolean = false;

  OnAuthorClick() {
    this.isModalVisible = true;
  }
  isVisibleChange($event: boolean) {
    this.isModalVisible = $event;
  }
}
