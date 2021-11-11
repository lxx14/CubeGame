import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeStore } from '@redux/config/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation/helpers';
import { useColorScheme } from 'react-native';
import { DarkTheme } from '@assets/theme/DarkTheme';
import { LightTheme } from '@assets/theme/LightTheme';
import { NavigatorHandler } from '@navigation/navigators';

export const { store, persistor } = initializeStore();

export const App: FC = () => {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef} theme={scheme === 'dark' ? DarkTheme : LightTheme}>
          <NavigatorHandler />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
