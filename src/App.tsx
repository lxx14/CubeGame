import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initializeStore } from '@redux/config/store';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './navigation/navigators/auth';
import { navigationRef } from './navigation/helpers';
import { useColorScheme } from 'react-native';
import { DarkTheme } from '@assets/theme/DarkTheme';
import { LightTheme } from '@assets/theme/LightTheme';

export const App: FC = () => {
  const { store, persistor } = initializeStore();
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef} theme={scheme === 'dark' ? DarkTheme : LightTheme}>
          <AuthNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
