import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateTask } from './create-update-task';

describe('CreateUpdateTask', () => {
  let component: CreateUpdateTask;
  let fixture: ComponentFixture<CreateUpdateTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
