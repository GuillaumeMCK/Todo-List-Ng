import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksRecapComponent } from './tasks-recap.component';

describe('TasksRecapComponent', () => {
  let component: TasksRecapComponent;
  let fixture: ComponentFixture<TasksRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksRecapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
