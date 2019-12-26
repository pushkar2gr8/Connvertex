import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import AddTasks from '../Screens/AddTasks';
import TasksList from '../Screens/TasksList';
import SplashScreen from '../Screens/SplashScreen';

const StackNavigator = createStackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
    login: {
      screen: LoginScreen,
    },
    signup: {
      screen: SignupScreen,
    },
    add: {
      screen: AddTasks,
    },
    list: {
      screen: TasksList,
    },
  },
  {
    initialRouteName: 'splash',
  },
);

export default StackNavigator;
