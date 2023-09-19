import { Component, Input } from '@angular/core';
import { WorksEntry } from 'src/app/models/dto/works-entry';

@Component({
  selector: 'app-work-row',
  templateUrl: './work-row.component.html',
  styleUrls: ['./work-row.component.scss'],
})
export class WorkRowComponent {
  isModalVisible: boolean = false;
  @Input() work!: WorksEntry;

  OnWorkClick() {
    this.isModalVisible = true;
  }

  isVisibleChange($event: boolean) {
    this.isModalVisible = $event;
  }
}
