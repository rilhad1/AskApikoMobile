import {
  compose,
  hoistStatics,
  withHandlers,
  withStateHandlers,
  withProps,
} from 'recompose';
import { connect } from 'react-redux';
import Footer from './Footer';
import * as appSelectors from '../../../../modules/app/selectors';
import * as answersOperation from '../../../../modules/answers/operation';
import screens from '../../../../navigation/screens';

const mapStateToProps = state => ({
  isAuthorized: appSelectors.getAuthorizationState(state),
});

const mapDispatchToProps = {
  // navigateToSignUp: navigationOperations.navigateToSignUp,
  createAnswer: answersOperation.createAnswer,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    answer: '',
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToSignUp: props => () =>
      props.navigation.navigate(screens.SignUp),
    submitAnswer: props => async () => {
      try {
        await props.createAnswer({
          title: 'Any title for answer',
          description: props.answer,
          questionId: props.id,
        });
      } catch (error) {
        console.error(error);
      }
    },
  }),
  withProps(console.log),
);

export default hoistStatics(enhancer)(Footer);
