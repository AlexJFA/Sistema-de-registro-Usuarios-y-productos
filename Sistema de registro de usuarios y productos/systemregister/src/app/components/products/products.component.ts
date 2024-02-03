import { Component, DoCheck, OnInit } from '@angular/core';
import { Subscription, async } from 'rxjs';
import { productModel } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // public products: any = [];
  public openP: boolean = false;
  public openE: boolean = false;
  public openD: boolean = false;

  public products: any = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.service.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  agg() {
    if (!this.openP) {
      this.openP = true;
      this.openE = false;
      this.openD = false;
    } else {
      this.openP = false;
    }
  }

  edit() {
    if (!this.openE) {
      this.openE = true;
      this.openP = false;
      this.openD = false;
    } else {
      this.openE = false;
    }
  }

  delete() {
    if (!this.openD) {
      this.openD = true;
      this.openP = false;
      this.openE = false;
    } else {
      this.openD = false;
    }
  }
}
