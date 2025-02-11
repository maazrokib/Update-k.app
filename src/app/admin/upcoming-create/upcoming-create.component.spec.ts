import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCreateComponent } from './upcoming-create.component';

describe('UpcomingCreateComponent', () => {
  let component: UpcomingCreateComponent;
  let fixture: ComponentFixture<UpcomingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
