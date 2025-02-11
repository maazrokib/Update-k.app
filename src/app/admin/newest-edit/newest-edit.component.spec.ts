import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestEditComponent } from './newest-edit.component';

describe('NewestEditComponent', () => {
  let component: NewestEditComponent;
  let fixture: ComponentFixture<NewestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
