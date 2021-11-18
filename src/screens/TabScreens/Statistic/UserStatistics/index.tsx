import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const UserStatistics: FC = () => {
  const { colors } = useTheme();
  const gamesPlayed = 0;
  const wins = 0;
  const loses = gamesPlayed - wins;

  const getWinsPersent = (games: number, winsNumber: number): string => {
    let result = ``;
    if (games) {
      result = `${(winsNumber / games) * 100} %`;
    }
    result = games ? `100%` : `0%`;
    return result;
  };

  return (
    <View>
      <Text style={{ ...styles.title, color: colors.text }}>User Statistic</Text>
      <Text style={{ ...styles.text, color: colors.text }}>Games Played: {gamesPlayed}</Text>
      <Text style={{ ...styles.text, color: colors.text }}>Wins: {wins}</Text>
      <Text style={{ ...styles.text, color: colors.text }}>Loses: {loses}</Text>
      <Text style={{ ...styles.text, color: colors.text }}>
        Persent Wins: {getWinsPersent(gamesPlayed, wins)}
      </Text>
    </View>
  );
};
