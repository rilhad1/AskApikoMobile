import {
  compose,
  hoistStatics,
  withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { AlertService } from '../../../services';
import * as authOperation from '../../../modules/auth/operation';
import * as authSelector from '../../../modules/auth/selectors';
import AuthorizedDrawer from './AuthorizedDrawer';
import { withLoadingModal } from '../../../utils/enhancers';
import screens from '../../../navigation/screens';
import * as actions from '../../../modules/app/actions';

const mapStateToProps = state => ({
  isLoading: authSelector.getSigningOutState(state),
});

const mapDispatchToProps = {
  signOut: authOperation.signOut,
};


const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingModal.stateProp('isLoading'),

  withHandlers({
    signingOut: props => async () => {
      try {
        await props.signOut();

        props.navigation.navigate(screens.UnauthorizedApplication);
      } catch (err) {
        console.error(err);
      }
    },
  }),
);

export default hoistStatics(enhancer)(AuthorizedDrawer);
