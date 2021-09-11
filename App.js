import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import End from './End';

export default class App extends React.Component {
  render() {
    return (
   <View>
   <HomeScreen/>
   </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BuzzBuzzScreen:End
});

const AppContainer = createAppContainer(AppNavigator);
