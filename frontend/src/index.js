import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import productReducer, { productsFetch } from './features/productSlices';
import { productsApi } from './features/productsApi';
import cartReducer, { getTotals } from './features/cartSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));



const store=configureStore({
  reducer:{
    products:productReducer,
    cart:cartReducer,
    [productsApi.reducerPath]:productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),
})
store.dispatch(productsFetch())
store.dispatch(getTotals())

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
