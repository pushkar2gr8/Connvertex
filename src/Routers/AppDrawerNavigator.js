import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import StackNavigator from './AppStackNavigator';

const AppDrawer = createDrawerNavigator(
  {
    stack: {
      screen: StackNavigator,
    },
  },
  {
    initialRouteName: 'stack',
  },
);

const AppContainer = createAppContainer(AppDrawer);

export default AppContainer;
