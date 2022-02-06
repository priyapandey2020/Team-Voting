// Modules Import
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

/**
 * @returns The App header
 */
export default class AppHeader extends Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Team Voting App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "#FFC300",
  },
  text: {
    padding: 20,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
