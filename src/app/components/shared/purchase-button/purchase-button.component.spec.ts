import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseButtonComponent } from './purchase-button.component';

describe('PurchaseButtonComponent', () => {
  let component: PurchaseButtonComponent;
  let fixture: ComponentFixture<PurchaseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
