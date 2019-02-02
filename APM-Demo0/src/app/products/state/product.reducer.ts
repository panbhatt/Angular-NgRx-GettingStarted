import * as rootState from "src/app/app.state";
import { Product } from "src/app/products/product";
import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { ProductActionTypes, ProductActions } from "./product.actions";

export interface State extends rootState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  products: Array<Product>;
  currentProduct: Product;
}

const initialState: ProductState = {
  showProductCode: true,
  products: [],
  currentProduct: null
};

export function reducer(
  state = initialState,
  action: ProductActions
): ProductState {
  console.log("Existing State " + JSON.stringify(state));
  console.log(JSON.stringify(action));
  switch (action.type) {
    case ProductActionTypes.TOGGLEPRODUCTCODE:
      return {
        ...state,
        showProductCode: action.payload
      };
  }
}

export const getProdcutsFeatureState = createFeatureSelector<ProductState>(
  "products"
);

export const getShowProductCode = createSelector(
  getProdcutsFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProdcutsFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProdcutsFeatureState,
  state => state.products
);
