import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { productsLoad, productsLoadSuccess, productsLoadFailure } from '../actions/products.action';
import { ProductsService } from '../services/products.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectProducts } from '../selectors/products.selectors';
import { AppState } from '../app.state';
import { product } from '../models/products.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private productService: ProductsService
  ) {}

  productsList!:product[];

//   // Run this code when a loadTodos action is dispatched
//   loadProducts$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(productsLoad),
//       switchMap(() =>
//         // Call the getTodos method, convert it to an observable
//         from(this.productService.getProducts()).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((products) => {
//             productsLoadSuccess({ products: products })
//             }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(productsLoadFailure({ error })))
//         )
//       )
//     )
//   );

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
        ofType(productsLoad),
        withLatestFrom(this.store.select(selectProducts)), // Add this if you want to check if products are already loaded
        switchMap(([action, products]) => {
            return this.productService.getProducts().pipe(
                map((products: product[]) => productsLoadSuccess({ products })),
                catchError((error) => of(productsLoadFailure({ error })))
            );
        })
        )
    );

}