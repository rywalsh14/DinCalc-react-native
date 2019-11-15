import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './src/screens/StartScreen';
import HeightScreen from './src/screens/HeightScreen'
import WeightScreen from './src/screens/WeightScreen';
import AgeScreen from './src/screens/AgeScreen';
import SoleLengthScreen from './src/screens/SoleLengthScreen';
import SkierTypeScreen from './src/screens/SkierTypeScreen';
import ReceiptScreen from './src/screens/ReceiptScreen';

const navigator = createStackNavigator({
    Start: StartScreen,
    Height: HeightScreen,
    Weight: WeightScreen,
    Age: AgeScreen,
    SoleLength: SoleLengthScreen,
    SkierType: SkierTypeScreen,
    Receipt: ReceiptScreen
}, {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
        title: 'Din Calulator'
    }
});

export default createAppContainer(navigator);