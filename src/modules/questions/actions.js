import { createAction } from 'redux-actions';
import * as types from './types';

export const getQuestionsStart = createAction(types.GET_QUESTIONS_START);
export const getQuestionsSuccess = createAction(types.GET_QUESTIONS_SUCCESS);
export const getQuestionsError = createAction(types.GET_QUESTIONS_ERROR);

export const getQuestionsMoreStart = createAction(types.GET_QUESTIONS_MORE_START);
export const getQuestionsMoreSuccess = createAction(types.GET_QUESTIONS_MORE_SUCCESS);
export const getQuestionsMoreError = createAction(types.GET_QUESTIONS_MORE_ERROR);

export const questionListHasNoMore = createAction(types.QUESTION_LIST_HAS_NO_MORE);
