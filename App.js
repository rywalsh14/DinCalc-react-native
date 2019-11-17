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
let StartScreenComponent = connect(state => ({ count: state.count }))(StartScreen);
let HeightScreenComponent = connect(state => ({ count: state.count }))(HeightScreen);
let WeightScreenComponent = connect(state => ({ count: state.count }))(WeightScreen);
let AgeScreenComponent = connect(state => ({ count: state.count }))(AgeScreen);
let SoleLengthScreenComponent = connect(state => ({ count: state.count }))(SoleLengthScreen);
let SkierTypeScreenComponent = connect(state => ({ count: state.count }))(SkierTypeScreen);
let ReceiptScreenComponent = connect(state => ({ count: state.count }))(rootReducer);

const navigator = createStackNavigator({
    Start: StartScreenComponent,
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
  