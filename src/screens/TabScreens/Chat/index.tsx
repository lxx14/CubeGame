import { useTheme } from '@react-navigation/native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getTestDataApi } from '../../../api/recoilTestApi';
import { testApiDataAtom, testApiDataonStartAtom, textAtom } from './recoil/atoms';
import { testApiOnStartSelector, testApiSelector, textSelector } from './recoil/selectors';
import { styles } from './styles';

export const Chat: FC = () => {
  const { colors } = useTheme();

  const [, setText] = useRecoilState(textAtom);
  const [, setTestApiData] = useRecoilState(testApiDataAtom);
  const [, setTestApiOnStartData] = useRecoilState(testApiDataonStartAtom);

  const [loading, setLoading] = useState(false);
  const [loadingInBegining, setLoadingInBegining] = useState(false);

  const textData = useRecoilValue(textSelector);
  const testApiData = useRecoilValue(testApiSelector);
  const testApiDataOnStart = useRecoilValue(testApiOnStartSelector);

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const setNewText = useCallback(() => {
    setText('changed text');
  }, [setText]);

  const clearState = useCallback(() => {
    setText('');
    setTestApiData([]);
    setTestApiOnStartData([]);
  }, [setTestApiData, setTestApiOnStartData, setText]);

  const getTestApiData = useCallback(async () => {
    try {
      setLoading(true);

      const testData = await getTestDataApi();
      setTestApiData(testData.data);

      await delay(1000);

      setLoading(false);
    } catch (error) {
      console.log('error-------------->', error);
      setLoading(false);
    }
  }, [setTestApiData]);

  useEffect(() => {
    const asyncOnRenderFunc = async () => {
      try {
        setLoadingInBegining(true);
        const result = await getTestDataApi();
        setTestApiOnStartData(result?.data);

        await delay(1000);

        setLoadingInBegining(false);
      } catch (error) {
        console.log('error-------------->', error);
        setLoadingInBegining(false);
      }
    };
    void asyncOnRenderFunc();
  }, [setTestApiOnStartData]);

  return (
    <ScrollView style={styles.container}>
      <Text style={{ color: 'blue' }}>simple example:</Text>
      <Text style={{ color: colors.text }}>text: {textData.text}</Text>
      <Text style={{ color: colors.text }}>text length: {textData.length}</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'yellow', marginVertical: 20 }}
        onPress={setNewText}>
        <Text>set new text</Text>
      </TouchableOpacity>
      <Text style={{ color: 'blue' }}>async example while press button below:</Text>
      {loading && <ActivityIndicator color={'blue'} size={50} />}
      {testApiData.length > 0 &&
        !loading &&
        testApiData.data.map((item) => (
          <View
            key={item.id}
            style={{ borderWidth: 1, borderColor: 'black', marginVertical: 10, padding: 5 }}>
            <Text>id: {item.id}</Text>
            <Text>title: {item.title}</Text>
            <Text>complited: {item.completed ? 'true' : 'false'}</Text>
          </View>
        ))}
      <TouchableOpacity
        style={{ backgroundColor: 'yellow', marginVertical: 20 }}
        onPress={getTestApiData}>
        <Text>get test data from api</Text>
      </TouchableOpacity>
      <Text style={{ color: 'blue' }}>async example while screen entering:</Text>
      {testApiDataOnStart.length > 0 &&
        !loadingInBegining &&
        testApiDataOnStart.data.map((item) => (
          <View
            key={item.id}
            style={{ borderWidth: 1, borderColor: 'black', marginVertical: 10, padding: 5 }}>
            <Text>id: {item.id}</Text>
            <Text>title: {item.title}</Text>
            <Text>complited: {item.completed ? 'true' : 'false'}</Text>
          </View>
        ))}
      {loadingInBegining && <ActivityIndicator color={'blue'} size={50} />}
      <TouchableOpacity
        style={{ backgroundColor: 'yellow', marginVertical: 20 }}
        onPress={clearState}>
        <Text>clear screen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
