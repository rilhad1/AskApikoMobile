import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';

const EmptyList = () => (
  <View style={s.container}>
    <Text style={s.text}>No Answers</Text>
    <Text style={s.subText}>Give your answer to this question!</Text>
  </View>
);

export default EmptyList;
