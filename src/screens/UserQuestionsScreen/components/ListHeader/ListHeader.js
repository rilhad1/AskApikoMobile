import React from 'react';
import { Text, View } from 'react-native';
import { Separator } from '../../../../components';
import s from './styles';

const ListHeader = () => (
  <View style={s.container}>
    <Text style={s.title}>User Questions</Text>
    <Separator />
  </View>
);


export default ListHeader;
