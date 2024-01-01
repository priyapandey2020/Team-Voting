import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Team1Screen from './screens/Team1Screen';
import Team2Screen from './Team2Screen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator(
  {
    HomeScreen:{Screen: HomeScreen},
    Team1:{Screen : Team1Screen},
    Team2 : {Screen : Team2Screen}
  },
  {
    initialRouteName : HomeScreen
  }
);

const AppContainer = createAppContainer(AppNavigator);
