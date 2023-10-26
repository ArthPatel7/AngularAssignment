import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CouponComponent } from './coupon.component';
import { ProductDescriptionComponent } from './productDescription.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ModelModule,
    RouterModule
  ],
  declarations: [
    ProductDescriptionComponent,
    CouponComponent,
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [
    ProductDescriptionComponent,
    CouponComponent,
    StoreComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
})

export class StoreModule { }
