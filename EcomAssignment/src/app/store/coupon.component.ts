import { Component } from '@angular/core';
import { Discount } from '../model/coupon.model';

@Component({
  selector: 'coupon',
  templateUrl: 'coupon.component.html'
})

export class CouponComponent {
  loading: boolean = false;
  taskCompleted: boolean = false;

  constructor(
    private discount : Discount
  ) {}

  applyCoupon() {
    this.loading = true;
    this.discount.CheckDiscount();

    setTimeout(() => {
      this.loading = false;
      this.taskCompleted = true;
      setTimeout(() => {
        this.taskCompleted = false;
      }, 2000);
    }, 3000);
  }
}

