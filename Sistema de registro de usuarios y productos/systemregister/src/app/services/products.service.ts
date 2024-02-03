import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, elementAt, map, merge, tap } from 'rxjs';
import { productModel } from '../models/productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public urlApi: string = 'http://localhost:3000/';

  @Output() disparadorDeProductos: EventEmitter<any> = new EventEmitter();

  // private _refresh$ = new Subject<void>();

  constructor(private _http: HttpClient) {}

  getAllProducts() {
    // return this._http
    //   .get(`${this.urlApi}products`)
    //   .pipe(map((res: any) => (
    //     this.products = res)));
    // --------------------------------------------------------------------------------------
    // return this._http.get(`${this.urlApi}products`).pipe(
    //   map((element: any) => {
    //     element.forEach((e: productModel) => {
    //        this.products.push(e);
    //     });
    //     console.log(this.products);
    //   })
    // );
    // --------------------------------------------------------------------------------------

    return this._http.get(`${this.urlApi}products`)
  }

  // get refresh$(){
  //   return this._refresh$;
  // }

  getProduct() {
    return this._http.get(`${this.urlApi}products/id`);
  }

  createProduct(product: any) {
    // return this._http.post(`${this.urlApi}products`, product).pipe(
    //   tap(()=> {this._refresh$.next()})
    // );

    return this._http.post(`${this.urlApi}products`, product);
  }

  updateProduct(id: string | undefined, product: any) {
    return this._http.put(`${this.urlApi}products/${id}`, product);
  }

  deleteProduct(id: string | undefined) {
    return this._http.delete(`${this.urlApi}products/${id}`);
  }
}
