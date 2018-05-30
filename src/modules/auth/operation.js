import { AsyncStorage } from 'react-native';
import * as appOperations from '../app/operations';
import * as actions from './actions';
import Api from '../../api';

export const signUp = ({ username, password, email }) => async (dispatch) => {
  try {
    dispatch(actions.signUpStart());

    const res = await Api.signUp({ username, password, email });

    await AsyncStorage.setItem('token', res.data.token);

    dispatch(actions.signUpSuccess(res.data.user));
    dispatch(appOperations.isAuthorization(true));

  } catch (err) {
    console.log('Registration error', err);

    dispatch(actions.signUpError({ message: err.message }));

    throw new Error('Registration error');
  }
};


export const signIn = ({ username, password }) => async (dispatch) => {
  try {
    dispatch(actions.signInStart());

    const res = await Api.signIn({ username, password });

    await AsyncStorage.setItem('token', res.data.token);

    dispatch(actions.signInSuccess());
    dispatch(appOperations.isAuthorization(true));

  } catch (err) {
    console.log('Authentication error', err);
    dispatch(actions.signInError({ message: err.message }));

    throw new Error('Authentication error');
  }
};


export const signOut = () => async (dispatch) => {
  try {
    dispatch(actions.signOutStart());

    await Api.signOut();

    await AsyncStorage.removeItem('token');


    dispatch(actions.signOutSuccess());
    dispatch(appOperations.isAuthorization(false));

  } catch (err) {
    console.log('Sign Out error', err);

    dispatch(actions.signOutError({ message: err.message }));

    throw new Error('Sign Out error');
  }
};
