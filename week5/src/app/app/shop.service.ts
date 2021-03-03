import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product, allProducts } from './product';

import {Category, categoryType } from './category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }
  getProducts(id: number): Observable<Product[]> {
    return of(allProducts.filter(product => product.category_id === id));
  }
  getCategoryType(): Observable<Category[]> {
    return of(categoryType);
  }

  getProduct(id: number): Observable<Product> {
    return of(allProducts.find(product => product.id === id));
  }
}
