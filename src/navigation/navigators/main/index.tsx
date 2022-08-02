import React from 'react';
import { ROUTES } from '@navigation/routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GameDashboard } from '@screens/TabScreens/GameDashboard';
import { Settings } from '@screens/TabScreens/Settings';
import { Statistic } from '@screens/TabScreens/Statistic';
import { Chat } from '@screens/TabScreens/Chat';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabNavigator = (): JSX.Element => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.GAME_DASHBOARD}
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.background },
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name={ROUTES.GAME_DASHBOARD}
        component={GameDashboard}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.STATISTIC}
        component={Statistic}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.CHAT}
        component={Chat}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
    </Tab.Navigator>
  );
};
