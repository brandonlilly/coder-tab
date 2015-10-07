import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';
import thunk from 'redux-thunk';
import remoteApi from '../middleware/remote';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';


export default function configureStore(initialState, socket) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(remoteApi(socket)),
    reduxReactRouter({ routes, createHistory }),
    applyMiddleware(createLogger()),
    devTools()
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
