import { handleActions } from 'redux-actions';
import * as types from './types';
import { mergeDeep } from '../../utils/stateHelpers';

const INITIAL_STATE = {
  isQuestionListLoading: false,
  isQuestionListLoadingMore: false,
  isQuestionListLoadingError: null,
  isQuestionListLoadingMoreError: null,

  isQuestionListHasNoMore: false,

  questionsIds: [],
  questionsEntities: {},
};

export default handleActions({
  [types.GET_QUESTIONS_START]: mergeDeep({ isQuestionListLoading: true }),
  [types.GET_QUESTIONS_SUCCESS]: mergeDeep(action => ({
    isQuestionListLoading: false,
    questionsIds: action.payload.ids,
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_ERROR]: mergeDeep(action => ({
    isQuestionListLoading: false,
    isQuestionListLoadingError: action.payload.error,
  })),

  [types.GET_QUESTIONS_MORE_START]: mergeDeep({ isQuestionListLoadingMore: true }),
  [types.GET_QUESTIONS_MORE_SUCCESS]: mergeDeep((action, state) => ({
    isQuestionListLoadingMore: false,
    questionsIds: state.questionsIds.concat(action.payload.ids),
    questionsEntities: action.payload.entities,
  })),
  [types.GET_QUESTIONS_MORE_ERROR]: mergeDeep(action => ({
    isQuestionListLoadingMore: false,
    isQuestionListLoadingMoreError: action.payload.error,
  })),

  [types.QUESTION_LIST_HAS_NO_MORE]: mergeDeep(action => ({
    isQuestionListHasNoMore: action.payload,
  })),

}, INITIAL_STATE);

