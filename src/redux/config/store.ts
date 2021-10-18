import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { SagaMiddlewareOptions } from '@redux-saga/core';
import { rootReducer } from '../modules/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SagaManager } from '../modules/sagas';
import { IAppStore } from '../interfaces/IAppStore';

export function initializeStore(): IAppStore {
  const sagaMiddlewaresOptions: SagaMiddlewareOptions = {};

  const sagaMiddleware = createSagaMiddleware(sagaMiddlewaresOptions);

  const middlewares = [sagaMiddleware];

  let composeFunc = compose;
  const composeParams = [applyMiddleware(...middlewares)];

  if (__DEV__) {
    composeFunc = composeWithDevTools as typeof compose;
  }
  const store = createStore(rootReducer, composeFunc(...composeParams));
  const persistor = persistStore(store);

  sagaMiddleware.run(SagaManager);

  return {
    store,
    persistor,
  };
}
