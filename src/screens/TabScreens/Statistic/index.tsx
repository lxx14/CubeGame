import React, { FC, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { UserBio } from './UserBio';
import { UserShortInfo } from './UserShortInfo';
import { UserStatistics } from './UserStatistics';

export const Statistic: FC = () => {
  const [isShowStatistic, setIsShowStatistic] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <UserShortInfo onChangeSwitch={setIsShowStatistic} isEnabled={isShowStatistic} />
      {isShowStatistic ? <UserStatistics /> : <UserBio />}
    </SafeAreaView>
  );
};
