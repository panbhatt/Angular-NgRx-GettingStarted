import { Injectable } from "@angular/core";
import { ProductService } from "src/app/products/product.service";
import { Actions } from "@ngrx/effects";
import { ofType } from "@ngrx/effects";
import { Effect } from "@ngrx/effects";
import { ProductActionTypes } from "src/app/products/state/product.actions";
import * as rootActions from "./product.actions";
import { Product } from "src/app/products/product";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  laodProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.LOAD_PRODUCTS),
    mergeMap((action: rootActions.LOADPRODUCT) =>
      this.productService
        .getProducts()
        .pipe(
          map(
            (prodcuts: Product[]) =>
              new rootActions.LOADPRODUCTSSUCCESS(prodcuts)
          )
        )
    )
  );
}
