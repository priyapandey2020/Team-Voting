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
var tA = undefined;
var tB = undefined;
db.ref('teamA').on('value', function (data) {
  tA = data.val();
})
db.ref('teamB').on('value', function (data) {
  tB = data.val();
})

export default class HomeScreen extends Component {

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={()=>
              db.ref('/').update({'teamA':tA+1})}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>
            <Text>            No of votes: {tA}</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={()=>
              db.ref('/').update({'teamB':tB+1})}>
              <Text style={{ fontSize:20}}>Team B</Text>
            </TouchableOpacity>
            <Text>            No of votes: {tB}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor:"coral",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin:10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
