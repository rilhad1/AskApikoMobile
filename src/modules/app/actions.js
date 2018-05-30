import { createAction } from 'redux-actions';
import * as types from './types';

export const isAuthorized = createAction(types.IS_AUTHORIZED);
export const isUnauthorized = createAction(types.IS_UNAUTHORIZED);
