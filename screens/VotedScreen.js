import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

export default class VotedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Thank You For Voting!! :)</Text>
        <Image
          style={{ width: 50, height: 50, alignSelf: 'center', marginTop: 185}}
          source={require('../assets/TeamImage.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff9a1' },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 27,
    marginTop: 220,
  },
});
