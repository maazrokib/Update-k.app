import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEditComponent } from './upcoming-edit.component';

describe('UpcomingEditComponent', () => {
  let component: UpcomingEditComponent;
  let fixture: ComponentFixture<UpcomingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
