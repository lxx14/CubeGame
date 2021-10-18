import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeStore } from '../src/redux/config/store';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './navigation/navigators/auth';
import { navigationRef } from './navigation/helpers';

export const App: FC = () => {
  const { store, persistor } = initializeStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <AuthNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
