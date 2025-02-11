import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCetegoryComponent } from './p-cetegory.component';

describe('PCetegoryComponent', () => {
  let component: PCetegoryComponent;
  let fixture: ComponentFixture<PCetegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCetegoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCetegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
