import * as actions from './actions';
import { normalize } from '../../utils';
import Api from '../../api';
import * as answersSelectors from '../answers/selectors';

export const getAnswersByQuestionId = id => async (dispatch, getState) => {
  try {
    const isFetching = answersSelectors.getAnswersListLoadingState(getState());

    if (isFetching) {
      return;
    }
    dispatch(actions.getAnswersByQuestionIdStart());

    const res = await Api.getAnswersByQuestionId({ id });

    const payload = normalize(res.data.questions);

    dispatch(actions.getAnswersByQuestionIdSuccess({ ...payload, id }));
  } catch (err) {
    dispatch(actions.getAnswersByQuestionIdError({ message: err.message }));

    throw new Error('Load Answers error');
  }
};

export const createAnswer = ({ title, description, questionId }) => async () => {
  try {
    await Api.createAnswer({ title, description, questionId });
  } catch (err) {
    console.log('CREATE_ANSWER_ERROR', err);
    throw new Error('Create answer Error');
  }
};
