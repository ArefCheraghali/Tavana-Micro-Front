import { configureStore } from "@reduxjs/toolkit";

import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist"; // middle-ware
// import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";

// setting persist configuration
const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

// setting up persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// setting store configuration
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});
