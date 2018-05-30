import {
  compose,
  hoistStatics,
  withHandlers, withPropsOnChange,
  withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import * as authOperation from '../../modules/auth/operation';
import * as authSelector from '../../modules/auth/selectors';
import SignInScreenView from './SignInScreenView';
import { withLoadingModal } from '../../utils/enhancers';
import screens from '../../navigation/screens';

const mapStateToProps = state => ({
  isLoading: authSelector.getSigningInState(state),
});

const mapDispatchToProps = {
  signingIn: authOperation.signIn,
};


const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingModal.stateProp('isLoading'),
  withStateHandlers({
    username: 'Rilhad@ukr.net',
    password: '134679vv',
    isValid: false,
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToRestorePassword: props => () =>
      props.navigation.navigate(screens.RestorePassword),
    signIn: props => async () => {
      if (props.isValid) {
        try {
          await props.signingIn({
            username: props.username,
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
    ['username', 'password'],
    (props) => {
      const isValid = (
        props.username.trim().length > 0 &&
        props.password.trim().length >= 8
      );

      props.onChange('isValid', isValid);
    }),
);

export default hoistStatics(enhancer)(SignInScreenView);
