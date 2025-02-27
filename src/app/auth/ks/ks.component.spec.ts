import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsComponent } from './ks.component';

describe('KsComponent', () => {
  let component: KsComponent;
  let fixture: ComponentFixture<KsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
