import React from 'react';
import T from 'prop-types';
import { compose, hoistStatics, withHandlers } from 'recompose';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import screens from '../../../../navigation/screens';
import s from './styles';
import { colors } from '../../../../styles';

const EmptyList = ({
  isLoading,
  navigateToCreateQuestion,
  navigateToSignUp,
  isAuthorized,
}) => {
  if (isLoading) {
    return (
      <View style={s.loading}>
        <ActivityIndicator
          size={70 || 'large'}
          color={colors.orange}
        />
      </View>
    );
  }
  return (
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
};

EmptyList.propTypes = {
  isLoading: T.bool,
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
