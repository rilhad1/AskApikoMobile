import React from 'react';
import T from 'prop-types';
import { Text, View } from 'react-native';
import s from './styles';

const Tags = ({
  tags,
}) => (
  <View style={s.tags}>
    { tags.map((el, i) => <Text style={s.tag} key={`${i + 1}-${el}`}>{el}</Text>)}
  </View>
);


Tags.propTypes = {
  tags: T.array,
};

export default Tags;
