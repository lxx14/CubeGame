import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@screens/Login';
import { Splash } from '@screens/Splash';
import React from 'react';
import { ROUTES } from '@navigation/routes';
import { TabNavigator } from '../main';

const Stack = createNativeStackNavigator();

export const AuthNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SPLASH}>
      <Stack.Screen
        name={ROUTES.SPLASH}
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.MAIN}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
