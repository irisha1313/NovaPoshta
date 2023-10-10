import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from "redux-persist"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { authSlice } from "./slices/authSlice"

const rootReducer = combineReducers({
	auth: authSlice.reducer,
})

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(),
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
