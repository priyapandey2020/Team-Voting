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
import {Audio} from 'expo-av';

export default class HomeScreen extends Component {

   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://www.voicy.network/clips/fEmiZ82RgUS1rgZOD7V6ng' },
      { shouldPlay: true }
    );
  }

  teamA(){
   db.ref('/').update({
     'teamA':1
   })
 }

 teamB(){
   console.log(db);
   db.ref('/').update({
     'teamB':2
   })
 }

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
            <Text style={{ textAlign: 'center',fontSize:30 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.playSound,this.teamA()}>
              <Text style={{ fontSize:20, fontWeight: 'bold'}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.playSound,this.teamB()}>
              <Text style={{ fontSize:20, fontWeight: 'bold'}}>Team B</Text>
            </TouchableOpacity>

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
    backgroundColor:"skyblue",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 20,
    margin:10,
    width: 150,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
