import React from 'react';
import T from 'prop-types';
import { compose, hoistStatics, withHandlers } from 'recompose';
import { View, Text, TouchableOpacity } from 'react-native';
import screens from '../../../../navigation/screens';
import s from './styles';

const EmptyList = ({
  navigateToCreateQuestion,
  navigateToSignUp,
  isAuthorized,
}) => (
  <View style={s.container}>
    <Text style={s.text}>No questions yet</Text>
    <Text style={s.subText}>No one has asked any question yet.</Text>
    <View>
      {
        isAuthorized &&
        <TouchableOpacity style={s.btn} onPress={navigateToCreateQuestion}>
          <Text style={s.textBtn}>Create Question</Text>
        </TouchableOpacity>
      }
      {
        !isAuthorized &&
        <TouchableOpacity style={s.btn} onPress={navigateToSignUp}>
          <Text style={s.textBtn}>Sign Up to Create Question</Text>
        </TouchableOpacity>
      }
    </View>
  </View>
);

EmptyList.propTypes = {
  isAuthorized: T.bool,
  navigateToCreateQuestion: T.func,
  navigateToSignUp: T.func,
};

const enhancer = compose(
  withHandlers({
    navigateToCreateQuestion: props => () =>
      props.navigation.navigate(screens.CreateQuestion),
    navigateToSignUp: props => () =>
      props.navigation.navigate(screens.SignUp),
  }),
);

export default hoistStatics(enhancer)(EmptyList);
