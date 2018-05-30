import {
  compose,
  hoistStatics,
  withHandlers,
  lifecycle,
  pure,
} from 'recompose';
import { connect } from 'react-redux';
import * as appSelectors from '../../modules/app/selectors';
import * as questionsOperation from '../../modules/questions/operation';
import * as questionsSelectors from '../../modules/questions/selectors';
import UserQuestionsScreenView from './UserQuestionsScreenView';
import screens from '../../navigation/screens';

const mapStateToProps = state => ({
  isAuthorized: appSelectors.getAuthorizationState(state),
  isLoading: questionsSelectors.getQuestionListLoadingState(state),
  isLoadingMore: questionsSelectors.getQuestionListLoadingMoreState(state),
  questionList: questionsSelectors.getQuestionList(state),
  hasNoMore: questionsSelectors.getQuestionListHasNoMoreState(state),
});

const mapDispatchToProps = {
  getQuestions: questionsOperation.getQuestions,
  getQuestionsMore: questionsOperation.getQuestionsMore,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    navigateToDetailQuestion: props => id =>
      props.navigation.navigate(screens.DetailQuestion, { id }),
  }),
  lifecycle({
    componentDidMount() {
      this.props.getQuestions();
    },
  }),
  pure,
);

export default hoistStatics(enhancer)(UserQuestionsScreenView);
