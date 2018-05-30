import React from 'react';
import { Text } from 'react-native';
import s from './styles';

const SendButton = (props) => {
  if (props.props.state.params) {
    return (
      <Text
        onPress={props.props.state.params.send}
        style={s.sendButton}
      >
        Send
      </Text>
    );
  }
  return (
    <Text
      style={s.sendButton}
    >
      Send
    </Text>
  );
};

export default SendButton;
