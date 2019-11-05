import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import TheNextScreen from './TheNextScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  TheNextScreen: {screen: TheNextScreen},
});
export default createAppContainer(AppNavigator);
