import React from 'react';
import T from 'prop-types';
import { Text, View } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { pure } from 'recompose';
import { Separator, CreatedByUser } from '../../../../components';

import s from './styles';
import { colors } from '../../../../styles/index';

const AnswerItem = ({
  title,
  description,
  createdAt,
  createdBy,
}) => (
  // TODO logic 'done' with IonicIcons
  <View style={s.container}>
    <View style={s.header}>
      <Text style={s.headerText}>{title}</Text>
    </View>
    <Separator />
    <View style={s.body}>
      <View style={s.bodyLeft}>
        <View style={s.votes}>
          <Entypo
            size={42}
            name="triangle-up"
            color={colors.separator}
          />
          <Text style={s.voteCount}>237</Text>
          <Entypo
            size={42}
            name="triangle-down"
            color={colors.separator}
          />
        </View>
        <Ionicons
          color={colors.questionItem.iconColor}
          size={28}
          name="md-checkmark-circle-outline"
        />
      </View>
      <View style={s.bodyText} >
        <Text style={s.desc}>{description}</Text>
      </View>
    </View>
    <Separator />
    <CreatedByUser
      createdAt={createdAt}
      createdBy={createdBy}
      asked={false}
    />
  </View>
);


AnswerItem.propTypes = {
  title: T.string,
  description: T.string,
  createdAt: T.string,
  createdBy: T.any,
  id: T.string,
  onPress: T.func,
};

export default pure(AnswerItem);
