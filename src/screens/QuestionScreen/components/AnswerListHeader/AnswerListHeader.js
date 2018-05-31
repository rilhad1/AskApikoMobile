import React from 'react';
import T from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Tags } from '../';
import { Separator, CreatedByUser } from '../../../../components';
import s from './styles';
import { colors } from '../../../../styles';

const AnswerListHeader = ({
  title,
  tags,
  description,
  createdAt,
  createdBy,
}) => (
  <View>
    <View style={s.header}>
      <View style={s.titleLeft}>
        <View style={s.votes}>
          <Entypo
            size={42}
            name="triangle-up"
            color={colors.orange}
          />
          <Text style={s.voteCount}>547</Text>
          <Entypo
            size={42}
            name="triangle-down"
            color={colors.separator}
          />
        </View>

      </View>
      <View style={s.headerTitle}>
        <Text style={s.title}>
          { title }
        </Text>
        { tags.filter(el => el.split('').length > 0).length > 0 ? <Tags tags={tags} /> : null }
      </View>
    </View>
    <Separator />
    <View style={s.description}>
      <Text style={s.descrText}>{description}</Text>
    </View>
    <Separator />
    <CreatedByUser
      createdAt={createdAt}
      createdBy={createdBy}
      asked
    />
    <Separator />
  </View>
);

AnswerListHeader.propTypes = {
  title: T.string,
  tags: T.array,
  description: T.string,
  createdAt: T.string,
  createdBy: T.any,
};

export default AnswerListHeader;
