import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./reduxServices/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },

    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(cryptoApi.middleware)
    
})