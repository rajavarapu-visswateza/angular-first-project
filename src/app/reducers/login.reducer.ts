import { createReducer, on } from '@ngrx/store';
import { loginAction } from '../actions/login.action';
import { loginData } from '../models/login.model';

export const initialState : loginData = {
    username : null,
    password : null
}

export const loginReducer = createReducer(
    initialState,
    on(loginAction, (state, { loginDetails }) => ({
        ...state,
        username: loginDetails.username,
        password: loginDetails.password
    }))
)