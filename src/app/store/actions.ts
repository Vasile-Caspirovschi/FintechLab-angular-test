import { createAction, props } from "@ngrx/store";
import { User } from "./user/user.interface";

export const login = createAction('[Auth] Login', props<{ user: User }>());
export const logout = createAction('[Auth] Logout');