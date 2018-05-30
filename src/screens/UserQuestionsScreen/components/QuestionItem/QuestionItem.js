import React from 'react';
import T from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { pure } from 'recompose';
import { Tags } from '../';
import s from './styles';
import { colors } from '../../../../styles/index';

const QuestionItem = ({
  id,
  title,
  tags,
  createdAt,
  createdBy,
  onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(id)}
    style={s.item}
  >
    <View style={s.container}>
      <View style={s.leftBar}>
        <Text style={s.votes}>10</Text>
        {
          (true) &&
          <Ionicons
            color={colors.questionItem.iconColor}
            size={15}
            name="md-checkmark-circle-outline"
          />
        }
      </View>
      <View style={s.rightBar}>
        <Text style={s.title}>
          { title }
        </Text>
        { tags.length > 0 ? <Tags tags={tags} /> : null }
        <View>
          <Text style={s.asked}>{`asked ${moment(createdAt).calendar()} by `}
            <Text style={s.askedBy}>
              {
                (typeof (createdBy) === 'object') ? createdBy.profile.fullName : 'unknown'
              }
            </Text>
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);


QuestionItem.propTypes = {
  title: T.string,
  tags: T.array,
  createdAt: T.string,
  createdBy: T.any,
  id: T.string,
  onPress: T.func,
};

export default pure(QuestionItem);
