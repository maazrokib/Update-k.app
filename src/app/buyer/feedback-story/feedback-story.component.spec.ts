import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackStoryComponent } from './feedback-story.component';

describe('FeedbackStoryComponent', () => {
  let component: FeedbackStoryComponent;
  let fixture: ComponentFixture<FeedbackStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
