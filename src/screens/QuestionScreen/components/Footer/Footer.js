import React from 'react';
import T from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import s from './styles';
import { Separator, CreateQuestionInput } from '../../../../components';


const AuthorizedFooter = ({
  answer,
  onChange,
  submitAnswer,
}) => (
  <View style={s.authContainer}>
    <View>
      <Separator />
      <CreateQuestionInput
        value={answer}
        onChange={text => onChange('answer', text)}
        placeholder="Type your answer here…"
      />
      <Separator />
    </View>
    <View style={s.submit}>
      <TouchableOpacity style={s.btn} onPress={submitAnswer}>
        <Text style={s.textBtn}>Submit Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const UnauthorizedFooter = ({ navigateToSignUp }) => (
  <View>
    <Separator />
    <View style={s.unAuthContainer}>
      <TouchableOpacity style={s.btn} onPress={navigateToSignUp}>
        <Text style={s.textBtn}>Sign Up to Submit Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const Footer = ({
  isAuthorized,
  navigateToSignUp,
  answer,
  onChange,
  submitAnswer,
  id,
}) => {
  console.log('ISSSSS?', isAuthorized);
  if (isAuthorized) {
    console.log('BACKKK');
    return (<AuthorizedFooter
      id={id}
      answer={answer}
      onChange={onChange}
      submitAnswer={submitAnswer}
    />);
  } else {
    return <UnauthorizedFooter navigateToSignUp={navigateToSignUp}/>;
  }
};

Footer.propTypes = {
  isAuthorized: T.bool,
  navigateToSignUp: T.func,
  answer: T.string,
  onChange: T.func,
  submitAnswer: T.func,
  id: T.string,
};

AuthorizedFooter.propTypes = {
  answer: T.string,
  onChange: T.func,
  submitAnswer: T.func,
};

UnauthorizedFooter.propTypes = {
  dispatch: T.any,
  navigateToSignUp: T.func,
};

export default Footer;
