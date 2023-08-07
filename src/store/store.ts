import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import themeSlice from "./reducer/themeSlice/themeSlice";


const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
};
const reducer = combineReducers({
  theme: themeSlice,
});

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
const persistedReducer = persistReducer<RootState>(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export { store };
