import { createSelector } from 'reselect';
import R from 'ramda';

export const getUser = createSelector(
  R.path(['user', 'userDetail']),
  state => state,
);
