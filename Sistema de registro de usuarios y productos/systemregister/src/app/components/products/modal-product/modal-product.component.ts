import { Component, Input } from '@angular/core';
import { productModel } from 'src/app/models/productModel';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss'],
})
export class ModalProductComponent {
  // variables que vienen desde el compoannete padre "products.component"
  @Input() openP!: boolean;
  @Input() openE!: boolean;
  @Input() openD!: boolean;


  public product: productModel;

  constructor(private _service: ProductsService) {
    this.product = new productModel('', "","");
  }

  agg() {
    this._service.createProduct(this.product).subscribe((data) => {
      console.log(data);
    });
    location.reload();
  }

  edit() {
    this._service
      .updateProduct(this.product.id, this.product)
      .subscribe((data) => {
        console.log(data);
      });

    location.reload();
  }

  delete() {
    this._service.deleteProduct(this.product.id).subscribe((data) => {
      console.log(data);
    });

    location.reload();
  }
}
