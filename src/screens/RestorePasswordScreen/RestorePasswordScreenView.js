import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { InputAuth } from '../../components';
import s from './styles';
import { colors, headerStyle } from '../../styles';

const RestorePasswordScreen = ({
  navigateToHome,
  username,
  onChange,
}) => (
  <ScrollView contentContainerStyle={s.container}>
    <View style={s.top}>
      <View style={s.titleContainer}>
        <Text style={s.title}>Restore password</Text>
      </View>
      <Text style={s.warn}>
        We will send you an instruction how to reset your password to your email address.
      </Text>
      <InputAuth
        value={username}
        onChange={text => onChange('username', text)}
        placeholder="username"
      />
    </View>
    <View style={s.bottom}>
      <TouchableOpacity style={s.btn} onPress={navigateToHome}>
        <Text style={s.textBtn}>Send instruction</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

RestorePasswordScreen.navigationOptions = () => ({
  // headerBackImage: <Ionicons
  //   color={colors.drawerButton.color}
  //   size={28}
  //   name="md-arrow-back"
  //   style={{ marginLeft: 16 }}
  // />,
  ...headerStyle,
});


RestorePasswordScreen.propTypes = {
  navigateToHome: T.func,
  username: T.string,
  onChange: T.func,
};

export default RestorePasswordScreen;
