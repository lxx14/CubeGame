import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@screens/Login';
import React from 'react';
import { ROUTES } from '@navigation/routes';
import { SignUp } from '@screens/SignUp';

const Stack = createNativeStackNavigator();

export const AuthNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.SIGN_UP}
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
