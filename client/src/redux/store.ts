import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";
import { dummyApi } from "@/features/apiServices/dummyApi";
import { articleAPI } from "@/features/apiServices/ArticleAPI";
import modalReducer from "@/features/modal/modalSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
    [articleAPI.reducerPath]: articleAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(dummyApi.middleware)
      .concat(articleAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
