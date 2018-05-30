import { createSelector } from 'reselect';
import R from 'ramda';

export const getAuthorizationState = createSelector(
  R.path(['app', 'isAuthorized']),
  state => state,
);
