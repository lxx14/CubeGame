import React from 'react';
import { ROUTES } from '@navigation/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GameDashboard } from '@screens/TabScreens/GameDashboard';
import { Settings } from '@screens/TabScreens/Settings';
import { Statistic } from '@screens/TabScreens/Statistic';
import { Chat } from '@screens/TabScreens/Chat';

const Tab = createBottomTabNavigator();

export const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName={ROUTES.GAME_DASHBOARD}>
      <Tab.Screen name={ROUTES.GAME_DASHBOARD} component={GameDashboard} />
      <Tab.Screen name={ROUTES.STATISTIC} component={Statistic} />
      <Tab.Screen name={ROUTES.CHAT} component={Chat} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};
