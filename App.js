// Modules Import
import React, { Component } from "react";
import { View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

// Files Import
import HomeScreen from "./screens/HomeScreen";
export default class App extends Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
