import React   from 'react';

import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from'react-redux';
import { getProducts } from './features/productsSlice';
import App from './App';
import { getTotal } from './features/CartSlice';


store.dispatch(getProducts())
store.dispatch(getTotal)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);
