import { createReducer, on } from '@ngrx/store';
import { productsLoad, productsLoadSuccess, productsLoadFailure } from '../actions/products.action';
import { product } from '../models/products.model';

export interface ProductsState {
    products: product[];
    error: string;
    status: string;
}

export const initialState : ProductsState = {
    products: [],
    error: "",
    status: "pending"
}

export const productsReducer = createReducer(
    initialState,
    on(productsLoad, (state, {}) => ({
        ...state,
        status:'loading'
    })),
    on(productsLoadSuccess, (state, {products}) => ({
        ...state,
        products: products,
        status:'success'        
    })),
    on(productsLoadFailure, (state, {error}) => ({
        ...state,
        error: error,
        status:'error'        
    }))
)