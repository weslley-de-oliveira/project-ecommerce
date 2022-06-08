import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAndAddressComponent } from './payment-and-address.component';

describe('PaymentAndAddressComponent', () => {
  let component: PaymentAndAddressComponent;
  let fixture: ComponentFixture<PaymentAndAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAndAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAndAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
