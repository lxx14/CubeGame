/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useTheme } from '@react-navigation/native';
import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { delay, getTestDataApi, useGetTestDataWithLoading } from '../../../api/recoilTestApi';
import { testApiDataAtom, testApiDataonStartAtom, textAtom } from './recoil/atoms';
import { testApiSelector, textSelector } from './recoil/selectors';
import { styles } from './styles';
import _ from 'lodash';

const Chat: FC = () => {
  // swr custom hook api reqest with SWR
  const { testDataSWR, isErrorSWR, isLoadingSWR } = useGetTestDataWithLoading(
    'https://jsonplaceholder.typicode.com/todos',
  );

  console.log('testDataSWR---------->', testDataSWR);
  console.log('isLoadingSWR---------->', isLoadingSWR);

  const { colors } = useTheme();

  const [, setText] = useRecoilState(textAtom);
  const [, setTestApiData] = useRecoilState(testApiDataAtom);
  const [, setTestApiOnStartData] = useRecoilState(testApiDataonStartAtom);

  const [loading, setLoading] = useState(false);

  const textData = useRecoilValue(textSelector);
  const testApiData = useRecoilValue(testApiSelector);

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

      const testData = await getTestDataApi('https://jsonplaceholder.typicode.com/todos');
      setTestApiData(testData.data);

      await delay(1000);

      setLoading(false);
    } catch (error) {
      console.log('error-------------->', error);
      setLoading(false);
    }
  }, [setTestApiData]);

  const dataSWR = useMemo(() => {
    return testDataSWR?.map((item) => (
      <View
        key={item.id}
        style={{ borderWidth: 1, borderColor: 'black', marginVertical: 10, padding: 5 }}>
        <Text>id: {item.id}</Text>
        <Text>title: {item.title}</Text>
        <Text>complited: {item.completed ? 'true' : 'false'}</Text>
      </View>
    ));
  }, [testDataSWR]);

  console.log('render------------>');

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
      <Text style={{ color: 'blue' }}>async example while screen entering with SWR:</Text>
      {dataSWR}
      {isLoadingSWR && <ActivityIndicator color={'blue'} size={50} />}
      <TouchableOpacity
        style={{ backgroundColor: 'yellow', marginVertical: 20 }}
        onPress={clearState}>
        <Text>clear screen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default memo(Chat, _.isEqual);
