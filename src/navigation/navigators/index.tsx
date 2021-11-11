import React from 'react';
import { useSelector } from 'react-redux';
import { tokenSelector } from '@redux/selectors';
import { AuthNavigator } from './auth';
import { TabNavigator } from './main';

export const NavigatorHandler = (): JSX.Element => {
  const token = useSelector(tokenSelector);

  return token ? <TabNavigator /> : <AuthNavigator />;
};
