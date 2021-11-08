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

  teamA(){
   db.ref('/').update({
     'teamA':5
   })
 }

 teamB(){
   console.log(db);
   db.ref('/').update({
     'teamB':10
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
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamA()}>
              <Text style={{ fontSize:20,fontWeight:"bold"}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamB()}>
              <Text style={{ fontSize:20,fontWeight:"bold"}}>Team B</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex:1,
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor:"#EF987E"
  },
  buttons: {
    backgroundColor:"#FEA6A1",
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    margin:10,
    width: 120,
    height: 40,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
