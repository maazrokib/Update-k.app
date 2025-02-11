import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestCreateComponent } from './newest-create.component';

describe('NewestCreateComponent', () => {
  let component: NewestCreateComponent;
  let fixture: ComponentFixture<NewestCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
