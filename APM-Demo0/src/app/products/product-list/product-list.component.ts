import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { Product } from "../product";
import { ProductService } from "../product.service";
import { Store } from "@ngrx/store";
import { select } from "@ngrx/store";
import { getShowProductCode } from "src/app/products/state/product.reducer";

import * as ProductActions from "./../state/product.actions";

@Component({
  selector: "pm-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = "Products";
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(
    private productService: ProductService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => (this.selectedProduct = selectedProduct)
    );

    this.store.dispatch(new ProductActions.LOADPRODUCT());

    this.productService
      .getProducts()
      .subscribe(
        (products: Product[]) => (this.products = products),
        (err: any) => (this.errorMessage = err.error)
      );

    // without selector.
    /*this.store.pipe(select("products")).subscribe(products => {
      if (products) {
        this.displayCode = products.showProductCode;
      }
    }); */

    this.store
      .pipe(select(getShowProductCode))
      .subscribe(showProductCode => (this.displayCode = showProductCode));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(value: boolean): void {
    this.displayCode = value;
    /* this.store.dispatch({
      type: "TOGGLE_PRODUCT_CODE",
      payload: value
    }); */
    this.store.dispatch(new ProductActions.TOGGLEPRODUCTCODE(value));
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }
}
