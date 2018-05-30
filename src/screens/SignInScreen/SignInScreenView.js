import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import T from 'prop-types';
import { InputAuth } from '../../components';
import s from './styles';
import { headerStyle } from '../../styles';

const SignInScreen = ({
  navigateToRestorePassword,
  username,
  password,
  onChange,
  signIn,
}) => (
  <ScrollView contentContainerStyle={s.container}>
    <View style={s.top}>
      <View style={s.titleContainer}>
        <Text style={s.title}>Sign In</Text>
      </View>
      <InputAuth
        value={username}
        onChange={text => onChange('username', text)}
        placeholder="username"
      />
      <InputAuth
        value={password}
        onChange={text => onChange('password', text)}
        placeholder="password"
        secure
      />
      <TouchableOpacity onPress={navigateToRestorePassword}>
        <Text style={s.text}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
    <View style={s.bottom}>
      <TouchableOpacity style={s.btn} onPress={signIn}>
        <Text style={s.textBtn}>SIGN IN!</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

SignInScreen.navigationOptions = () => ({
  // headerBackImage: <Ionicons
  //   color={colors.drawerButton.color}
  //   size={28}
  //   name="md-arrow-back"
  //   style={{ marginLeft: 16 }}
  // />,
  ...headerStyle,
});

SignInScreen.propTypes = {
  navigateToRestorePassword: T.func,
  username: T.string,
  password: T.string,
  onChange: T.func,
  signIn: T.func,
};

export default SignInScreen;
