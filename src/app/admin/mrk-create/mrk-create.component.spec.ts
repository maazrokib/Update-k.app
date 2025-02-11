import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrkCreateComponent } from './mrk-create.component';

describe('MrkCreateComponent', () => {
  let component: MrkCreateComponent;
  let fixture: ComponentFixture<MrkCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrkCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
