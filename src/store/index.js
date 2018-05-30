import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import reducers from '../modules';

let store = null; // eslint-disable-line

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const addNavigationListener = createReduxBoundAddListener('root');

if (__DEV__) { // eslint-disable-line
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
  store = createStore(
    combineReducers(reducers),
    {},
    compose(
      applyMiddleware(navigationMiddleware, thunk),
      devToolsEnhancer.default({
        realtime: true,
        hostname: 'localhost',
        port: 8000,
        suppressConnectErrors: false,
      }),
    ),
  );
  // console.log('sto:', store.getState().auth);

  store.subscribe(() => {
    console.log('Is Authorized?:', store.getState().app);
  });
} else {
  store = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(navigationMiddleware, thunk),
  );
  // console.log('sto:', store.getState());

  // store.subscribe(() => {
  //   console.log('store:', store.getState());
  // });
}

export default store;