import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import {pizzaReducer} from "./slices/pizzaSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        pizzas: pizzaReducer
    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {
    store
}

export type {
    RootState,
    AppDispatch,

}