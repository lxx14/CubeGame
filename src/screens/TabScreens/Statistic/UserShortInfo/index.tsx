import { useTheme } from '@react-navigation/native';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Theme } from '../../../../types/theme';
import { EditAvatarComponent } from './EditAvatarComponent';
import { styles } from './styles';

interface IProps {
  onChangeSwitch: Dispatch<SetStateAction<boolean>>;
  isEnabled: boolean;
}

export const UserShortInfo: FC<IProps> = ({ onChangeSwitch, isEnabled }) => {
  const { colors } = useTheme() as Theme;
  const [isVisibleAvatarEditing, setIsVisibleAvatarEditing] = useState(false);
  const text = isEnabled ? 'Show User Bio' : 'Show Detail Statistic';

  const onAvatarPress = () => {
    setIsVisibleAvatarEditing(true);
  };

  return (
    <View style={styles.container}>
      {isVisibleAvatarEditing && <EditAvatarComponent setIsVisible={setIsVisibleAvatarEditing} />}
      <Avatar
        rounded
        containerStyle={styles.avatar}
        size="large"
        source={require('@assets/images/user-avata-default.png')}
        onPress={onAvatarPress}
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
