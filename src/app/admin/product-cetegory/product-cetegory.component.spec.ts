import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCetegoryComponent } from './product-cetegory.component';

describe('ProductCetegoryComponent', () => {
  let component: ProductCetegoryComponent;
  let fixture: ComponentFixture<ProductCetegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCetegoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCetegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
