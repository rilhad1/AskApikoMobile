import { createStackNavigator } from 'react-navigation';
import { screens } from './';
import UserQuestionsScreen from '../screens/UserQuestionsScreen';
import QuestionScreen from '../screens/QuestionScreen';


export default createStackNavigator({
  [screens.Home]: { screen: UserQuestionsScreen },
  [screens.DetailQuestion]: { screen: QuestionScreen },
}, {
  headerTransitionPreset: 'uikit',
});
