import { Action } from "@ngrx/store";
import { Product } from "src/app/products/product";

export enum ProductActionTypes {
  LOAD_PRODUCTS = "[ Product ] Load Prodcuts ",
  LOAD_PRODUCTS_SUCCESS = "[ Product ] Load Prodcuts SUCCESS",
  TOGGLEPRODUCTCODE = "[ Product ] Toggle Product Code",
  SETCURRENTCODE = "[Product] Set Current Product "
}

export class LOADPRODUCT implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;

  constructor() {}
}

export class LOADPRODUCTSSUCCESS implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {}
}

export class TOGGLEPRODUCTCODE implements Action {
  readonly type = ProductActionTypes.TOGGLEPRODUCTCODE;

  constructor(public payload: boolean) {}
}

export class SETCURRENTCODE implements Action {
  readonly type = ProductActionTypes.SETCURRENTCODE;

  constructor(public payload: number) {}
}

export type ProductActions =
  | TOGGLEPRODUCTCODE
  | SETCURRENTCODE
  | LOADPRODUCT
  | LOADPRODUCTSSUCCESS;
