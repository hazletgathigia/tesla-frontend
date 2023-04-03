import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import dataReducer from "./dataSlice";

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
