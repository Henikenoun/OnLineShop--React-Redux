import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productsSlice';
import { productsAPi } from '../features/productApi';
import cartReducer from '../features/CartSlice';


export default  configureStore({
    reducer: {
      product: productReducer,
      [productsAPi.reducerPath]: productsAPi.reducer,
      cartProduct: cartReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPi.middleware),
  
  })

