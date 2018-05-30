import React from 'react';
import { View, Image } from 'react-native';
import s from './styles';
import logo from '../../../assets/images/logo.png';

const HeaderLogo = () => (
  <View style={s.container}>
    <Image
      source={logo}
      style={s.image}
    />
  </View>
);

export default HeaderLogo;
