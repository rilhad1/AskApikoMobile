import React from 'react';
import T from 'prop-types';
import { Text, View, Image } from 'react-native';
import { Separator } from '../../../../components';
import s from './styles';
import bitmap from '../../../../../assets/images/bitmap.png';


const ProfileHeader = ({
  username,
  email,
}) => (
  <View>
    <View style={s.header}>
      <Text style={s.title}>Profile</Text>
    </View>
    <Separator />
    <View style={s.user}>
      <Image
        style={s.img}
        source={bitmap}
      />
      <View>
        <Text style={s.username}>{`@${username}`}</Text>
        <Text style={s.email}>{email}</Text>
      </View>
    </View>
    <Separator />
    <View style={s.postContainer}>
      <Text style={s.post}>Posted questions</Text>
    </View>
    <Separator />
  </View>
);


ProfileHeader.propTypes = {
  username: T.string,
  email: T.string,
};

export default ProfileHeader;
