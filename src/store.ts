import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localizationReducer from "./localization/localization.slice";
import storage from "redux-persist/lib/storage";

export interface RootState {
  localization: {
    language: "en" | "ar";
  };
}

// ROOT REDUCER

const rootReducer = combineReducers({
  localization: localizationReducer,
});

// REDUX PERSIST CONFIGURATION
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["localization"], // Specify which reducers need to be persisted
};

// PERSISTED REDUCER

const persistedReducer = persistReducer(persistConfig, rootReducer);

// STORE CONFIGURATION
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
