import { createAction, props } from '@ngrx/store';
import { loginData } from '../models/login.model';

export const loginAction = createAction(
  '[Login Component] do login',
  props<{ loginDetails: loginData }>()
);