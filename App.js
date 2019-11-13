import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './src/screens/StartScreen';
import HeightScreen from './src/screens/HeightScreen'
import WeightScreen from './src/screens/WeightScreen';

const navigator = createStackNavigator({
    Start: StartScreen,
    Height: HeightScreen,
    Weight: WeightScreen
}, {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
        title: 'Din Calulator'
    }
});

export default createAppContainer(navigator);