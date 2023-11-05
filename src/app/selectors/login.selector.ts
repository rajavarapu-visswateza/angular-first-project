import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { loginData } from '../models/login.model';

export const selectLoginDetails = (state: AppState) => state;
export const selectUserName = createSelector(
  selectLoginDetails,
  (state: AppState) => state.loginDetails
);