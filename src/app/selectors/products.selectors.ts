import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductsState } from '../reducers/products.reducer';

export const selectProducts = (state: AppState) => state.productDetails;
export const selectProductsList = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
);