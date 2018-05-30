import { createSelector } from 'reselect';
import R from 'ramda';

const getAnswersIds = state => R.pathOr([], ['answers', 'answersIds'], state);
const getAnswersEntities = state => R.pathOr({}, ['answers', 'answersEntities'], state);

export const getAnswerIdsByQuestionId = createSelector(
  (state, id) => R.pathOr({}, ['answers', 'answerIds', id])(state),
  state => state,
);

export const getAnswersListLoadingState = createSelector(
  R.path(['answers', 'isAnswerListLoading']),
  state => state,
);

export const getAnswerListLoadingMoreState = createSelector(
  R.path(['answers', 'isAnswerListLoadingMore']),
  state => state,
);

export const getAnswersByQuestionId = createSelector(
  [getAnswersIds, getAnswersEntities],
  (ids, entities) => ids.map(item => entities[item]),
);


export const getAnswersListCount = createSelector(
  getAnswersIds,
  ids => ids.length,
);