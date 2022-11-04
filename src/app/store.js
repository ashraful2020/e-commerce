import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import persistStore from 'redux-persist/lib/persistStore';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage'
import authSlice from "../features/authSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  auth: authSlice,
})
const persistConfig = {
  key: 'root',
  storage,
  // version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});


export const persistor = persistStore(store);

export default store;