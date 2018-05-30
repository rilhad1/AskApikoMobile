import React from 'react';
import T from 'prop-types';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { headerStyle } from '../../styles';
import { DrawerButton, InputAuth } from '../../components';
import s from './styles';

const SignUpScreen = ({
  navigateToSignIn,
  signUp,
  username,
  email,
  password,
  onChange,
}) => (
  <ScrollView contentContainerStyle={s.container}>
    <View style={s.top}>
      <View style={s.titleContainer}>
        <Text style={s.title}>Sign Up</Text>
      </View>
      <InputAuth
        value={username}
        onChange={text => onChange('username', text)}
        placeholder="username"
      />
      <InputAuth
        value={email}
        onChange={text => onChange('email', text)}
        placeholder="email"
      />
      <InputAuth
        value={password}
        onChange={text => onChange('password', text)}
        placeholder="password"
        secure
      />
      <TouchableOpacity onPress={navigateToSignIn}>
        <Text style={s.text}>Already has an account?</Text>
      </TouchableOpacity>
    </View>
    <View style={s.bottom}>
      <TouchableOpacity style={s.btn} onPress={signUp}>
        <Text style={s.textBtn}>SIGN UP!</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

SignUpScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: <DrawerButton onPress={() => navigation.toggleDrawer()} />,
  ...headerStyle,
});

SignUpScreen.propTypes = {
  navigateToSignIn: T.func,
  signUp: T.func,
  username: T.string,
  email: T.string,
  password: T.string,
  onChange: T.func,
};

export default SignUpScreen;
