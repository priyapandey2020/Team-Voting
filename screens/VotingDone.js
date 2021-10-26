import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class VotingDone extends Component {


  render() {
    return (
      <View>

          <AppHeader />
          <Text style={styles.text}>Thanks for Voting</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    marginTop: 250,
    fontSize: 20,
    fontWeight: 'bold'
  }
})