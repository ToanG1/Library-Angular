import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { WorksEntry } from 'src/app/models/dto/works-entry';

@Component({
  selector: 'app-work-modal',
  templateUrl: './work-modal.component.html',
  styleUrls: ['./work-modal.component.scss'],
})
export class WorkModalComponent {
  @Input()
  work!: WorksEntry;

  @Input()
  isVisible!: boolean;

  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.isVisible = false;
      this.isVisibleChange.emit(this.isVisible);
    }
  }

  ngOnInit() {
    console.log(this.work);
  }
}
