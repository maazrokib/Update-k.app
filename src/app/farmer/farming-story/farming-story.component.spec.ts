import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingStoryComponent } from './farming-story.component';

describe('FarmingStoryComponent', () => {
  let component: FarmingStoryComponent;
  let fixture: ComponentFixture<FarmingStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmingStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmingStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
