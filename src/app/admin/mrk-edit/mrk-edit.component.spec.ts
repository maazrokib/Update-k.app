import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrkEditComponent } from './mrk-edit.component';

describe('MrkEditComponent', () => {
  let component: MrkEditComponent;
  let fixture: ComponentFixture<MrkEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrkEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
