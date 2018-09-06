import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router/Router';
import configureStore from './redux/store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));