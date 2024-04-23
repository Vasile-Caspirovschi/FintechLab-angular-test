import { createFeature, createReducer, on } from "@ngrx/store";
import { login, logout } from "./actions";
import { UserState } from "./state";

export const initialState: UserState = {
    user: null
};

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(login, (state, payload) => ({ ...state, user: payload.user })),
        on(logout, (state) => ({ ...state, user: null })),
    ),
})

export const { name: authFeatureKey, reducer: authReducer } = authFeature;
