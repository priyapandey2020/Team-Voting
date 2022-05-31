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

export default class HomeScreen extends Component {

  goToTeamAScreen=()=> {
    this.props.navigation.navigate('TeamAScreen')
  }

  goToTeamBScreen=()=> {
    this.props.navigation.navigate('TeamBScreen')
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

 TeamAClicked(){
  this.goToTeamAScreen()
  this.teamA()
 }

 TeamBClicked(){
   this.goToTeamBScreen()
   this.teamB()
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
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.TeamAClicked()}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.TeamBClicked()}>
              <Text style={{ fontSize:20}}>Team B</Text>
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
    backgroundColor:"#F5F5DC",
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
