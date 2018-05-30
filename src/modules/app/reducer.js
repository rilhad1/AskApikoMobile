import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isAuthorized: null,
};

export default handleActions({
  [types.IS_AUTHORIZED]: mergeDeep({ isAuthorized: true }),
  [types.IS_UNAUTHORIZED]: mergeDeep({ isAuthorized: false }),
}, INITIAL_STATE);

