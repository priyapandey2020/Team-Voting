import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  Alert
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';
import TeamA from './TeamA'

export default class HomeScreen extends Component {

/* goToAScreen=()=> {
    this.props.navigation.navigate('AScreen');
  };*/

  teamA(){
   db.ref('/').update({
     'teamA':1
   })
 //  goToAScreen();
 }

 teamB(){
   console.log(db);
   db.ref('/').update({
     'teamB':2
   })
  
 }
Like = () => {
    alert('Thank you for liking! 😀 ');
  };
  Dislike = () => {
    alert('Thank you for your valuable comment 🙏, I will try to improve it!  ');
  };

  render() {
    return (
      <View style={{backgroundColor:"cyan"}}>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5,borderColor:'yellow',borderWidth:2 }}
                source={require('../assets/image-removebg-preview.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamA()}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamB()}>
              <Text style={{ fontSize:20}}>Team B</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{backgroundColor:"cyan"}}>
        <TouchableOpacity onPress={this.Like}>
          <Image
            source={require('../assets/thumbs-up-hand-symbol.png')}
            style={{ width: 60, height: 60, margin:10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.Dislike}>
          <Image
            source={require('../assets/thumbs-down-silhouette.png')}
            style={{ width: 60, height: 60, marginLeft: 250, marginTop:-60,marginBottom:24 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 140,
            marginTop: -40,
            fontFamily: 'chiller regular',
            fontSize: 25,
            // fontWeight:'bold',
          }}>
          Rate Us!
        </Text>
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
