import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isAnswersLoading: false,
  isAnswersLoadingMore: false,
  isAnswersLoadingError: null,
  isAnswersLoadingMoreError: null,

  isAnswersHasNoMore: false,

  answersIds: [],
  answersEntities: {},
};

export default handleActions({
  [types.GET_ANSWERS_BY_QUESTION_ID_START]: mergeDeep({ isAnswersLoading: true }),
  [types.GET_ANSWERS_BY_QUESTION_ID_SUCCESS]: mergeDeep(action => ({
    isAnswersLoading: false,
    answersIds: action.payload.ids,
    answersEntities: action.payload.entities,
  })),
  [types.GET_ANSWERS_BY_QUESTION_ID_ERROR]: mergeDeep(action => ({
    isAnswersLoading: false,
    isAnswersLoadingError: action.payload.error,
  })),

  [types.GET_ANSWERS_BY_QUESTION_ID_MORE_START]: mergeDeep({ isAnswersLoadingMore: true }),
  [types.GET_ANSWERS_BY_QUESTION_ID_MORE_SUCCESS]: mergeDeep((action, state) => ({
    isAnswersLoadingMore: false,
    answersIds: state.questionsIds.concat(action.payload.ids),
    answersEntities: action.payload.entities,
  })),
  [types.GET_ANSWERS_BY_QUESTION_ID_MORE_ERROR]: mergeDeep(action => ({
    isAnswersLoadingMore: false,
    isAnswersLoadingMoreError: action.payload.error,
  })),
}, INITIAL_STATE);

