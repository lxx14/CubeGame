import { useTheme } from '@react-navigation/native';
import { emailSelector } from '@redux/selectors';
import React, { FC, useState } from 'react';
import { Keyboard, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { styles } from './styles';

export const UserBio: FC = () => {
  const emailInStore = useSelector(emailSelector);
  const { colors } = useTheme();
  const [nickName, setNickName] = useState('Bob');
  const [email, setEmail] = useState(emailInStore);
  const [aboutMe, setAboutMe] = useState('Empty... Yet:)');

  const handleBlur = () => {
    Keyboard.dismiss();
  };

  return (
    <ScrollView
      contentContainerStyle={{ ...styles.wrapper, backgroundColor: colors.background }}
      keyboardShouldPersistTaps="never">
      <Text style={{ ...styles.title, color: colors.text }}>Nick Name:</Text>
      <TextInput
        style={{ ...styles.textInput, color: colors.text, borderColor: colors.border }}
        value={nickName}
        onChangeText={setNickName}
      />
      <Text style={{ ...styles.title, color: colors.text }}>Email:</Text>
      <TextInput
        style={{ ...styles.textInput, color: colors.text, borderColor: colors.border }}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{ ...styles.title, color: colors.text }}>About me:</Text>
      <TextInput
        style={{ ...styles.textInput, color: colors.text, borderColor: colors.border }}
        value={aboutMe}
        onChangeText={setAboutMe}
        multiline={true}
      />
      <TouchableOpacity onPress={handleBlur}>
        <Text style={{ ...styles.button, color: colors.primary }}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
