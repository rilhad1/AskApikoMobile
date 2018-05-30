import { compose, hoistStatics, withHandlers, withStateHandlers } from 'recompose';
import RestorePasswordScreenView from './RestorePasswordScreenView';
import screens from '../../navigation/screens';

const enhancer = compose(
  withStateHandlers({
    username: '',
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    navigateToHome: props => () =>
      props.navigation.navigate(screens.Home),
  }),
);

export default hoistStatics(enhancer)(RestorePasswordScreenView);
