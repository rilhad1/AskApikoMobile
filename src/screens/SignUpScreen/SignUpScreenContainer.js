import {
  compose,
  hoistStatics,
  withHandlers,
  withStateHandlers,
  withPropsOnChange,
} from 'recompose';
import { connect } from 'react-redux';
import * as authOperation from '../../modules/auth/operation';
import * as authSelector from '../../modules/auth/selectors';
import SignUpScreenView from './SignUpScreenView';
import { withLoadingModal } from '../../utils/enhancers';
import screens from '../../navigation/screens';


const mapStateToProps = state => ({
  isLoading: authSelector.getSigningUpState(state),
});

const mapDispatchToProps = {
  signingUp: authOperation.signUp,
};


const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingModal.stateProp('isLoading'),
  withStateHandlers({
    username: '',
    email: '',
    password: '',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToSignIn: props => () =>
      props.navigation.navigate(screens.SignIn),
    signUp: props => async () => {
      if (props.isValid) {
        try {
          await props.signingUp({
            username: props.username,
            email: props.email,
            password: props.password,
          });

          props.navigation.navigate(screens.AuthorizedApplication);
        } catch (error) {
          console.error(error);
        }
      }
    },
  }),

  withPropsOnChange(
    ['username', 'email', 'password'],
    (props) => {
      const isValid = (
        props.username.trim().length > 0 &&
        props.email.trim().includes('@') &&
        props.password.trim().length >= 8
      );

      props.onChange('isValid', isValid);
    },
  ),
);

export default hoistStatics(enhancer)(SignUpScreenView);
