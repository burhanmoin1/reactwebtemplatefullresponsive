import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import formReducer from './slices/formSlice';
import userReducer from './slices/userSlice'
import imageReducer from './slices/imageSlice';
import cartReducer from './slices/cartSlice';
import orientationReducer from './slices/artworkSlice';

const store = configureStore({
    reducer: {
      modal: modalReducer,
      user: userReducer,
      form: formReducer,
      images: imageReducer,
      cart: cartReducer,
      orientation: orientationReducer,
    },
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;