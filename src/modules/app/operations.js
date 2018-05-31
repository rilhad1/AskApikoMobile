import { AsyncStorage, NetInfo } from 'react-native';
import * as actions from './actions';
import * as navigationOperations from '../navigation/operations';
import Api, { SocketApi } from '../../api';

export const initApi = token => () => {
  Api.setToken(token);
  SocketApi.initialize(token);

  // initialize socket handlers
  SocketApi.setOnMessageHandler(data => console.log('data', data));
};

export const isAuthorization = isAuthorized => async (dispatch) => {
  try {
    if (isAuthorized) {
      dispatch(actions.isAuthorized());
    } else {
      dispatch(actions.isUnauthorized());
    }
  } catch (err) {
    console.log(err);
    throw new Error('Error');
  }
};


export const initialization = () => async (dispatch) => {
  NetInfo.isConnected.addEventListener('connectionChange',
    isConnected => console.log('isConnected:', isConnected),
  );

  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch(initApi(token));
      dispatch(isAuthorization(true));
      dispatch(navigationOperations.navigateToAuthorized());
    } else {
      dispatch(isAuthorization(false));
      dispatch(navigationOperations.navigateToUnauthorized());
    }
  } catch (err) {
    console.log('err', err);
    throw new Error('Initialization Error');
  }
};

