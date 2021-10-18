import React from 'react';
import { ROUTES } from '../../routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GameDashboard } from '../../../../src/screens/TabScreens/GameDashboard';
import { Settings } from '../../../../src/screens/TabScreens/Settings';
import { Statistic } from '../../../../src/screens/TabScreens/Statistic';
import { Chat } from '../../../../src/screens/TabScreens/Chat';

const Tab = createBottomTabNavigator();

export const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName={ROUTES.GAME_DASHBOARD}>
      <Tab.Screen
        name={ROUTES.GAME_DASHBOARD}
        component={GameDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ROUTES.STATISTIC}
        component={Statistic}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ROUTES.CHAT}
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
