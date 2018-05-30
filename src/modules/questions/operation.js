import * as actions from './actions';
import * as questionsSelectors from './selectors';
import { normalize } from '../../utils' ;
import Api from '../../api';
import {AsyncStorage} from "react-native";

export const getQuestions = () => async (dispatch, getState) => {
  try {
    const isFetching = questionsSelectors.getQuestionListLoadingState(getState());

    if (isFetching) {
      return;
    }

    dispatch(actions.getQuestionsStart());
    const token = await AsyncStorage.getItem('token');

    const res = await Api.getQuestions();

    const payload = normalize(res.data.questions);

    dispatch(actions.getQuestionsSuccess(payload));
  } catch (err) {
    dispatch(actions.getQuestionsError({ message: err.message }));

    throw new Error('Load questions error');
  }
};

export const getQuestionsMore = () => async (dispatch, getState) => {
  try {
    const isFetchingMore = questionsSelectors.getQuestionListLoadingMoreState(getState());
    const isFetching = questionsSelectors.getQuestionListLoadingState(getState());

    if (isFetchingMore || isFetching) {
      return;
    }

    const count = questionsSelectors.getQuestionListCount(getState());

    dispatch(actions.getQuestionsMoreStart());

    const res = await Api.getQuestions({ skip: count });

    const payload = normalize(res.data.questions);

    dispatch(actions.getQuestionsMoreSuccess(payload));
  } catch (err) {
    dispatch(actions.getQuestionsMoreError({ message: err.message }));

    throw new Error('Load more questions error');
  }
};


export const createQuestion = ({ title, description, tags }) => async () => {
  try {

    const createdByUser = await Api.getUser();

    const createdById = createdByUser.data.user._id;

    await Api.createQuestion({title, description, tags, createdById});
  } catch (err) {
    console.log(err)
    throw new Error('Create question Error');
  }
};
