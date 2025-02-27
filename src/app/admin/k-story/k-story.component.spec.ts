import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KStoryComponent } from './k-story.component';

describe('KStoryComponent', () => {
  let component: KStoryComponent;
  let fixture: ComponentFixture<KStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
