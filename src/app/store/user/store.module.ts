import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "./reducers";

@NgModule({
    imports: [StoreModule.forRoot({ user: userReducer })],
})
export class UserStoreModule { }   