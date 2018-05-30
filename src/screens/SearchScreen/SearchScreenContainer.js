import { compose, hoistStatics, withHandlers } from 'recompose';
import SearchScreenView from './SearchScreenView';
// import screens from '../../navigation/screens';

const enhancer = compose(
  withHandlers({
    
  }),
);

export default hoistStatics(enhancer)(SearchScreenView);
