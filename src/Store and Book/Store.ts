import { configureStore } from "@reduxjs/toolkit";
import boookReducer from "./BookSlice"
import { baseApi } from "../Api/baseApi";
export const store = configureStore({
    reducer: {
        lib: boookReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;