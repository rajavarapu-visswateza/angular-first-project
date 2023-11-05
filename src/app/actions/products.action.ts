import { createAction, props } from '@ngrx/store';
import { product } from '../models/products.model';

export const productsLoad= createAction(
  '[Product Component] load products'
);

export const productsLoadSuccess = createAction(
    '[Product Component] load products success',
    props<{ products: product[] }>()
);

export const productsLoadFailure = createAction(
    '[Product Component] load products failure',
    props<{ error: string }>()
);