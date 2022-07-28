import React from 'react';
import { useSelector } from 'react-redux';
import { tokenSelector } from '@redux/selectors';
import { AuthNavigator } from './auth';
import { TabNavigator } from './main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@navigation/routes';
const Stack = createNativeStackNavigator();

export const NavigatorHandler = (): JSX.Element => {
  const token = useSelector(tokenSelector);

  return (
    <Stack.Navigator>
      {/* {token ? ( */}
      <Stack.Screen
        name={ROUTES.MAIN}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* ) : (
        <Stack.Screen
          name={ROUTES.AUTH}
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
      )} */}
    </Stack.Navigator>
  );
};
