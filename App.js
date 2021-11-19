import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import VoteDoneScreen from './screens/VoteDoneScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  VoteDoneScreen: VoteDoneScreen,
});

const AppContainer = createAppContainer(AppNavigator);
