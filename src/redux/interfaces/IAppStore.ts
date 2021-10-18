import { Store } from 'redux';
import { Persistor } from 'redux-persist/es/types';

export interface IAppStore {
  store: Store;
  persistor: Persistor;
}
