import { createAction } from 'redux-actions';
import * as types from './types';

export const getUserStart = createAction(types.GET_USER_START);
export const getUserSuccess = createAction(types.GET_USER_SUCCESS);
export const getUserError = createAction(types.GET_USER_ERROR);
