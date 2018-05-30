import React from 'react';
import { TextInput } from 'react-native';
import T from 'prop-types';
import s from './styles';
import color from '../../styles/colors';

const AnswerInput = ({
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

  />
);

AnswerInput.propTypes = {
  onChange: T.func,
  value: T.string,
  placeholder: T.string,
};

export default AnswerInput;
