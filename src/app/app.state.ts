import { loginData } from "./models/login.model";
import { ProductsState } from "./reducers/products.reducer";

export interface AppState {
  loginDetails: loginData;
  productDetails: ProductsState
}