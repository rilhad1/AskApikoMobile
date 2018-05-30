import React from 'react';
import T from 'prop-types';
import moment from 'moment';
import { View, Image, Text } from 'react-native';
import s from './style';
import bitmap from '../../../assets/images/bitmap.png';


const CreatedByUser = ({
  createdAt,
  createdBy,
  asked,
}) => (
  <View style={s.container}>
    <View style={s.userName}>
      <Image
        style={s.img}
        source={bitmap}
      />
      <Text style={s.askedBy}>
        {
          (typeof (createdBy) === 'object') ? createdBy.profile.fullName : 'Ivan Ivanov'
        }
      </Text>
    </View>
    <View style={s.timeContainer}>
      <Text style={s.asked}>{asked ? 'asked' : 'answered'}</Text>
      <Text style={s.time}>{moment(createdAt).calendar()}</Text>
    </View>
  </View>
);

CreatedByUser.propTypes = {
  createdAt: T.string,
  createdBy: T.any,
  asked: T.bool,
};

export default CreatedByUser;
