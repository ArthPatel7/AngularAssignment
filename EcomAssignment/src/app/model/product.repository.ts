import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: any[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: any = null): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((p) => p.id == id);
  }

  // getProducts(category: any): Product[] {  // Auto-Trigger
  //   return this.products.filter(
  //     (p) => category == null || category == p.category
  //     );
  // }

  getCategories(): any[] {
    return this.categories;
  }
}
