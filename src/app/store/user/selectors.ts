import { createSelector } from "@ngrx/store";
import { UserState } from "./state";

export const selectFeature = (state: { auth: UserState }) => state.auth;

export const selectLoggedUser = createSelector(
    selectFeature,
    (state: UserState) => state.user
);