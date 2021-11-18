import { useTheme } from '@react-navigation/native';
import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { Theme } from '../../../../../types/theme';
import { styles } from './styles';

interface IProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const EditAvatarComponent: FC<IProps> = ({ setIsVisible }) => {
  const { colors } = useTheme() as Theme;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const slideIn = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  const slideOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setIsVisible(false);
    });
  };

  useEffect(() => {
    slideIn();
  }, [slideIn]);

  const onCloseAvatarEditing = () => {
    slideOut();
  };

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [
          {
            translateX: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-200, -10],
            }),
          },
        ],
        backgroundColor: colors.background,
        shadowColor: colors.text,
      }}>
      <Text style={{ ...styles.text, color: colors.text }}>Select from gallery</Text>
      <Text style={{ ...styles.text, color: colors.text }}>Take a photo</Text>
      <TouchableOpacity onPress={onCloseAvatarEditing}>
        <Text style={{ ...styles.text, color: colors.text }}>Close</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
