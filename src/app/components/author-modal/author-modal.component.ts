import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthorDetails } from 'src/app/models/dto/author-details';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-modal',
  templateUrl: './author-modal.component.html',
  styleUrls: ['./author-modal.component.scss'],
})
export class AuthorModalComponent {
  @Input()
  authorKey!: string;

  @Input()
  isVisible!: boolean;

  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  constructor(
    private authorService: AuthorService,
    private elementRef: ElementRef,
    private router: Router
  ) {}
  data!: AuthorDetails;

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.isVisible = false;
      this.isVisibleChange.emit(this.isVisible);
    }
  }
  OnWorksClick() {
    this.router.navigate(['/works'], {
      queryParams: { authorKey: this.authorKey },
    });
  }

  ngOnInit() {
    this.authorService
      .getAuthorDetails(this.authorKey)
      .subscribe((res: any) => {
        this.data = res;
      });
  }
}
