import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    // Add your reducers here
  },
  middleware: (customizedMiddleware) =>
    customizedMiddleware({
      serializableCheck: false,
    }),
});

export default store;
