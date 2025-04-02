import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";

const store = configureStore({
    reducer:{auth:authReducer}
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