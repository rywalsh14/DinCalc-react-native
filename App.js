import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './src/screens/StartScreen';
import HeightScreen from './src/screens/HeightScreen'

const navigator = createStackNavigator({
    Start: StartScreen,
    Height: HeightScreen
}, {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
        title: 'Din Calulator'
    }
});

export default createAppContainer(navigator);