import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';
export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,

    // Add your reducers here
  },
  middleware: (customizedMiddleware) =>
    customizedMiddleware({
      serializableCheck: false,
    }),
});

export default store;
