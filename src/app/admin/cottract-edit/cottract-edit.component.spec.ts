import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottractEditComponent } from './cottract-edit.component';

describe('CottractEditComponent', () => {
  let component: CottractEditComponent;
  let fixture: ComponentFixture<CottractEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottractEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CottractEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
