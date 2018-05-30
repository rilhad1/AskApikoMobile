import { createDrawerNavigator } from 'react-navigation';
import { screens } from './';
import HomeNavigator from './HomeNavigator';
import AboutUsNavigator from './AboutUsNavigator';
import TermsAndCondition from '../screens/TermsAndConditionScreen';
import AuthNavigator from './AuthNavigator';
import { UnauthorizedDrawer } from './components';

export default createDrawerNavigator({
  [screens.Home]: {
    screen: HomeNavigator,
    drawerLabel: 'Home',
  },
  [screens.AboutUs]: {
    screen: AboutUsNavigator,
    drawerLabel: 'About Us',
  },
  [screens.TermsAndCondition]: {
    screen: TermsAndCondition,
    drawerLabel: 'Terms & Condition',
  },
  [screens.Auth]: {
    screen: AuthNavigator,
    drawerLabel: 'Sign Up',
  },
}, {
  initialRouteName: screens.Auth,
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: UnauthorizedDrawer,
});
