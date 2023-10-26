import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Discount } from '../model/coupon.model';

@Component({
  selector: 'cart-detail',
  templateUrl: 'cartDetail.component.html'
})

export class CartDetailComponent {
  constructor(
    public cart: Cart,
    public discount: Discount
    ) {}

  public isDiscountApplied: any = false;

  applyDiscount() {
    if (this.discount.isCouponApplied == true)
    {
      this.isDiscountApplied = true;
    }
  }
}
