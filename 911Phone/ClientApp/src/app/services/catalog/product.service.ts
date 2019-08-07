import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_API_URL } from '../../globals';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ProductsOrder } from '../../models/catalog/dto/products-order';
import { Product } from '../../models/catalog/dto/product';


@Injectable()
export class ProductService {
  private baseUrlProduct: string;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json', 'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.baseUrlProduct = BASE_API_URL + '/products';
  }

  public getProductsByOrderId(id: number): Observable<ProductsOrder[]> {
    return this.http.get(this.baseUrlProduct + '/' + id + '/order', {
      headers: this.headers
    }).map((response: Response) => response)
      .catch((error: any) =>
        Observable.throw(error.error || 'Server error'));
  }

  public getProductsByTitleMatch(title: string, shopId: number): Observable<Product[]> {
    return this.http.get(this.baseUrlProduct + '/' + title + '/' + shopId + '/title-match', {
      headers: this.headers
    }).map((response: Response) => response)
      .catch((error: any) =>
        Observable.throw(error.error || 'Server error'));
  }

  public getProductsByCategoryId(categoryId: number, shopId: number): Observable<Product[]> {
    return this.http.get(this.baseUrlProduct + '/' + categoryId + '/' + shopId + '/category', {
      headers: this.headers
    }).map((response: Response) => response)
      .catch((error: any) =>
        Observable.throw(error.error || 'Server error'));
  }

  public getProductsByCategoryAndTitleMatch(categoryId: number, title: string, shopId: number): Observable<Product[]> {
    return this.http.get(this.baseUrlProduct + '/' + categoryId + '/' + title + '/' + shopId + '/category-title-match', {
      headers: this.headers
    }).map((response: Response) => response)
      .catch((error: any) =>
        Observable.throw(error.error || 'Server error'));
  } 

}
