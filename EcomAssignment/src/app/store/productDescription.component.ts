import { Component, Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from '../model/product.repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PROTOCOL = "http";
const PORT = 3500;

@Component({
  selector: 'productDescription',
  templateUrl: 'productDescription.component.html',
})

@Injectable()
export class ProductDescriptionComponent {
  baseUrl: string;
  product: Product | undefined;
  constructor(
    private repository: ProductRepository,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    const productId = this.activeRoute.snapshot.paramMap.get("id");

    if (productId) {
      this.product = this.repository.getProduct(+productId);
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }
}
