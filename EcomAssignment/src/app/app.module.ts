import { CartDetailComponent } from './store/cartDetail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './StoreFirst.Guard';
import { CheckoutComponent } from './store/checkout.component';
import { CouponComponent } from './store/coupon.component';
import { ProductDescriptionComponent } from './store/productDescription.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'coupon',
        component: CouponComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'cart',
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: "productDescription/:id",
        component: ProductDescriptionComponent,
        // canActivate: [StoreFirstGuard],
      },
      {
        path: '**',
        redirectTo: '/coupon'
      },
    ]),
  ],
  providers: [StoreFirstGuard],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}



