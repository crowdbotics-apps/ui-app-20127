import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed2099242Navigator from '../features/Feed2099242/navigator';
import Dashboard12499236Navigator from '../features/Dashboard12499236/navigator';
import Settings99217Navigator from '../features/Settings99217/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed2099242: { screen: Feed2099242Navigator },
Dashboard12499236: { screen: Dashboard12499236Navigator },
Settings99217: { screen: Settings99217Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
