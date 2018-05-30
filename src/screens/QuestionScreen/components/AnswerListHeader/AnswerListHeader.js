import React from 'react';
import T from 'prop-types';
import { Text, View } from 'react-native';
import { Tags } from '../';
import { Separator, CreatedByUser } from '../../../../components';
import s from './styles';

const AnswerListHeader = ({
  title,
  tags,
  description,
  createdAt,
  createdBy,
}) => (
  <View>
    <View style={s.header}>
      <Text style={s.title}>
        { title }
      </Text>
      { tags.filter(el => el.split('').length > 0).length > 0 ? <Tags tags={tags} /> : null }
    </View>
    <Separator />
    <View style={s.description}>
      <Text style={s.descrText}>{description}</Text>
    </View>
    <Separator />
    <CreatedByUser
      createdAt={createdAt}
      createdBy={createdBy}
      asked={true}
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
