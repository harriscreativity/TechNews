import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/pages/Home/Home';
import DetailScreen from './src/pages/Detail/Detail';

import Icon from 'react-native-vector-icons/Feather'

Icon.loadFont();

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { header: null },
  },
  Detail: {screen: DetailScreen, navigationOptions: { header: null } },
  initialRouteName: 'Home',
});

const App = createAppContainer(MainNavigator);

export default App;