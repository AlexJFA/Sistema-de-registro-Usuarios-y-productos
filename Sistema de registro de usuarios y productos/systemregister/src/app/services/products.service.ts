import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public urlApi: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  getAllProducts() {
    return this._http.get(`${this.urlApi}products`);
  }

  getProduct() {
    return this._http.get(`${this.urlApi}products/id`);
  }

  createProduct(product: any) {
    return this._http.post(`${this.urlApi}products`, product);
  }

  updateProduct(id: string | undefined, product: any) {
    return this._http.put(`${this.urlApi}products/${id}`, product);
  }

  deleteProduct(id: string | undefined) {
    return this._http.delete(`${this.urlApi}products/${id}`);
  }
}
