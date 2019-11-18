import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import StartScreen from './src/screens/StartScreen';
import HeightScreen from './src/screens/HeightScreen'
import WeightScreen from './src/screens/WeightScreen';
import AgeScreen from './src/screens/AgeScreen';
import SoleLengthScreen from './src/screens/SoleLengthScreen';
import SkierTypeScreen from './src/screens/SkierTypeScreen';
import ReceiptScreen from './src/screens/ReceiptScreen';
import rootReducer from './src/redux/reducers';

let store = createStore(rootReducer);

// connect state to screen components
let HeightScreenComponent = connect(state => ({ height: state.height }))(HeightScreen);
let WeightScreenComponent = connect(state => ({ weight: state.weight }))(WeightScreen);
let AgeScreenComponent = connect(state => ({ age: state.age }))(AgeScreen);
let SoleLengthScreenComponent = connect(state => ({ soleLength: state.soleLength }))(SoleLengthScreen);
let SkierTypeScreenComponent = connect(state => ({ skierType: state.skierType }))(SkierTypeScreen);
let ReceiptScreenComponent = connect(state => ({ 
    height: state.height,
    weight: state.weight,
    age: state.age,
    soleLength: state.soleLength,
    skierType: state.skierType
}))(ReceiptScreen);

const navigator = createStackNavigator({
    Start: StartScreen,
    Height: HeightScreenComponent,
    Weight: WeightScreenComponent,
    Age: AgeScreenComponent,
    SoleLength: SoleLengthScreenComponent,
    SkierType: SkierTypeScreenComponent,
    Receipt: ReceiptScreenComponent
}, {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
        header: null
    }
});

let Navigation = createAppContainer(navigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
  