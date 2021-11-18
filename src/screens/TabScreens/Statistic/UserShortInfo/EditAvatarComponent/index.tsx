import { useTheme } from '@react-navigation/native';
import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { Theme } from '../../../../../types/theme';
import { styles } from './styles';
import * as ImagePicker from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { setUserAvatar } from './redux/actionCreators';
import { MediaType } from '../../../../../types/gallery';

interface IProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const EditAvatarComponent: FC<IProps> = ({ setIsVisible }) => {
  const dispatch = useDispatch();
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

  const options = {
    mediaType: 'photo' as MediaType,
  };

  const openGallery = async () => {
    slideOut();
    const result = await ImagePicker.launchImageLibrary(options);
    console.log('result-------->', result?.assets[0].uri);
    dispatch(setUserAvatar(result?.assets[0]?.uri));
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
      <TouchableOpacity onPress={openGallery}>
        <Text style={{ ...styles.text, color: colors.text }}>Select from gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCloseAvatarEditing}>
        <Text style={{ ...styles.text, color: colors.text }}>Close</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
