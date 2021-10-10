import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewExperienceFormComponent } from './interview-experience-form.component';

describe('InterviewExperienceFormComponent', () => {
  let component: InterviewExperienceFormComponent;
  let fixture: ComponentFixture<InterviewExperienceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewExperienceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
