import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isUserLoading: false,
  isUserLoadingError: null,

  userDetail: {},
};

export default handleActions({
  [types.GET_USER_START]: mergeDeep({ isUserLoading: true }),
  [types.GET_USER_SUCCESS]: mergeDeep(action => ({
    isUserLoading: false,
    userDetail: action.payload,
  })),
  [types.GET_USER_ERROR]: mergeDeep(action => ({
    isUserLoading: false,
    isUserLoadingError: action.payload.error,
  })),
}, INITIAL_STATE);

