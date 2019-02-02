import { Action } from "@ngrx/store";

export enum ProductActionTypes {
  TOGGLEPRODUCTCODE = "[ Product ] Toggle Product Code",
  SETCURRENTCODE = "[Product] Set Current Product "
}

export class TOGGLEPRODUCTCODE implements Action {
  readonly type = ProductActionTypes.TOGGLEPRODUCTCODE;

  constructor(public payload: boolean) {}
}

export class SETCURRENTCODE implements Action {
  readonly type = ProductActionTypes.SETCURRENTCODE;

  constructor(public payload: number) {}
}

export type ProductActions = TOGGLEPRODUCTCODE | SETCURRENTCODE;
