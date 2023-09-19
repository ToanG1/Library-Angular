import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRowComponent } from './work-row.component';

describe('WorkRowComponent', () => {
  let component: WorkRowComponent;
  let fixture: ComponentFixture<WorkRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
