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

export default class VotedScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <AppHeader />
        <Text style = {styles.votedText}> Thank you for voting! Ask your teacher for the results once the voting is complete.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  votedText:{
    textAlign: 'center',
    fontSize:25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
