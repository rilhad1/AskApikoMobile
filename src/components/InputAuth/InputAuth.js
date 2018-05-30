import React from 'react';
import { TextInput } from 'react-native';
import T from 'prop-types';
import s from './styles';
import color from '../../styles/colors';

const InputAuth = ({
  secure,
  onChange,
  value,
  placeholder,
}) => (
  <TextInput
    style={s.input}
    onChangeText={onChange}
    value={value}
    underlineColorAndroid={color.InputAuth.underline}
    placeholder={placeholder}
    secureTextEntry={secure}
  />
);

InputAuth.propTypes = {
  onChange: T.func,
  value: T.string,
  placeholder: T.string,
};

export default InputAuth;
