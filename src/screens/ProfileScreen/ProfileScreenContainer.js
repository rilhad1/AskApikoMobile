import {
  compose,
  hoistStatics,
  withHandlers,
  lifecycle,
  withProps,
  pure,
} from 'recompose';
import { connect } from 'react-redux';
import * as userOperation from '../../modules/user/operation';
import * as userSelectors from '../../modules/user/selectors';
import * as questionsOperation from '../../modules/questions/operation';
import * as questionsSelectors from '../../modules/questions/selectors';
import ProfileScreenView from './ProfileScreenView';
import screens from '../../navigation/screens';

const mapStateToProps = state => ({
  isLoading: questionsSelectors.getQuestionListLoadingState(state),
  isLoadingMore: questionsSelectors.getQuestionListLoadingMoreState(state),
  questionList: questionsSelectors.getQuestionList(state),
  user: userSelectors.getUser(state),
  hasNoMore: questionsSelectors.getQuestionListHasNoMoreState(state),
});

const mapDispatchToProps = {
  getUser: userOperation.getUser,
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
      this.props.getUser();
      this.props.getQuestions();
    },
  }),
  withProps(props => ({
    userQuestions: props.questionList.filter(el => el.createdById === props.user._id),
  })),
  pure,
);

export default hoistStatics(enhancer)(ProfileScreenView);
