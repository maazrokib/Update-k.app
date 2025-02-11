import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottractCreateComponent } from './cottract-create.component';

describe('CottractCreateComponent', () => {
  let component: CottractCreateComponent;
  let fixture: ComponentFixture<CottractCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottractCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CottractCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
