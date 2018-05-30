import {
  compose,
  hoistStatics,
  lifecycle,
  pure,
} from 'recompose';
import { connect } from 'react-redux';
import { paramsToProps } from '../../utils/enhancers';
import * as questionsSelectors from '../../modules/questions/selectors';
import * as answersOperation from '../../modules/answers/operation';
import * as answersSelectors from '../../modules/answers/selectors';
import QuestionScreen from './QuestionScreenView';
import * as appSelectors from '../../modules/app/selectors';

const mapStateToProps = (state, props) => ({
  isAuthorized: appSelectors.getAuthorizationState(state),
  question: questionsSelectors.getQuestionById(state, props.id),
  answers: answersSelectors.getAnswersByQuestionId(state),
});

const mapDispatchToProps = {
  getAnswers: answersOperation.getAnswersByQuestionId,
};

const enhancer = compose(
  paramsToProps('id'),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getAnswers(this.props.id);
    },
  }),
  pure,
);

export default hoistStatics(enhancer)(QuestionScreen);
