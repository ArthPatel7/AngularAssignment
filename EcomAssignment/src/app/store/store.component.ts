import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html',
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;
  public productDetailsVisible: boolean = false;

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = 1;
    this.selectedPage = newPage;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize.target.value);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
     return Array(Math.ceil(this.repository
         .getProducts(this.selectedCategory).length / this.productsPerPage))
             .fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    console.log(product);
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

  showDetails(): void {

  }
}
