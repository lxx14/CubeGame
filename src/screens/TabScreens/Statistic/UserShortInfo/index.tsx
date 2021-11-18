import { useTheme } from '@react-navigation/native';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { Switch, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Theme } from '../../../../types/theme';
import { styles } from './styles';

interface IProps {
  onChangeSwitch: Dispatch<SetStateAction<boolean>>;
  isEnabled: boolean;
}

export const UserShortInfo: FC<IProps> = ({ onChangeSwitch, isEnabled }) => {
  const { colors } = useTheme() as Theme;

  const text = isEnabled ? 'Show User Bio' : 'Show Detail Statistic';

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        containerStyle={styles.avatar}
        size="large"
        source={require('@assets/images/user-avata-default.png')}
      />
      <View style={styles.sitchWrapper}>
        <Text style={{ ...styles.text, color: colors.text }}>{text}</Text>
        <Switch
          onValueChange={onChangeSwitch}
          value={isEnabled}
          thumbColor={colors.text}
          trackColor={{
            false: colors.placeholder,
            true: colors.primary,
          }}
        />
      </View>
    </View>
  );
};
