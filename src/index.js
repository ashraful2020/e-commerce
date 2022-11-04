import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store, { persistor } from './app/store';

import './index.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import Loader from './components/shared/loader/loader';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/*
       <PersistGate loading={null} persistor={persistor}> 
      </PersistGate> 
      */}
    </BrowserRouter>
  </Provider>,
);
