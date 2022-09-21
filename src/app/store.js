import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartSlice from "../features/productSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistStore from 'redux-persist/lib/persistStore';
import persistReducer from 'redux-persist/lib/persistReducer';
// redux persist 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartSlice,
})
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['counter']
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