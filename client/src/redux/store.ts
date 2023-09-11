import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice"
import { dummyApi } from "@/features/apiServices/dummyApi";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dummyApi.reducerPath]: dummyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false
    }).concat(dummyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;