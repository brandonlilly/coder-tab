import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router'
import configureStore from './store/configureStore';
import io from 'socket.io-client';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const store = configureStore(undefined, socket);

render(
  <Provider store={store}>
    <ReduxRouter/>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  require('./tools/createDevToolsWindow')(store);
}
