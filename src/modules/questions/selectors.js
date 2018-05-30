import { createSelector } from 'reselect';
import R from 'ramda';

const getQuestionsIds = state => R.pathOr([], ['questions', 'questionsIds'], state);
const getQuestionsEntities = state => R.pathOr({}, ['questions', 'questionsEntities'], state);
// const getQuestionById = (state, id) => R.pathOr(['questions', 'questionsEntities', id])(state);

export const getQuestionListLoadingState = createSelector(
  R.path(['questions', 'isQuestionListLoading']),
  state => state,
);

export const getQuestionListLoadingMoreState = createSelector(
  R.path(['questions', 'isQuestionListLoadingMore']),
  state => state,
);

export const getQuestionListErrorState = createSelector(
  R.path(['questions', 'isQuestionListLoadingError']),
  state => state,
);

export const getQuestionListLoadingMoreErrorState = createSelector(
  R.path(['questions', 'isQuestionListLoadingMoreError']),
  state => state,
);

export const getQuestionList = createSelector(
  [getQuestionsIds, getQuestionsEntities],
  (ids, entities) => ids.map(item => entities[item]),
);

export const getQuestionListCount = createSelector(
  getQuestionsIds,
  ids => ids.length,
);

export const getQuestionListHasNoMoreState = createSelector(
  R.path(['questions', 'isQuestionListHasNoMore']),
  state => state,
);

export const getQuestionById = createSelector(
  (state, id) => R.pathOr({}, ['questions', 'questionsEntities', id])(state),
  state => state,
);
