import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../slice/Slice";
import { api } from "../../api/api";



export const store = configureStore({
  reducer: {
    weather: reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>

