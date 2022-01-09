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
  constructor(){
    super();
    this.state = {
      teamACount: 0,
      teamBCount: 0
    }
  }

  teamA = () => {
   console.log(`Team A`)
   console.log(this.state)
   db.ref('/').update({
     'teamA': 1,
     'teamACount': this.state.teamACount + 1
   })
   
   this.setState({
     teamACount: this.state.teamACount + 1
   });
   
 }

 teamB = () => {
   console.log("Team B")
   console.log(db);
   db.ref('/').update({
     'teamB':2,
     'teamBCount': this.state.teamBCount + 1
   });
   this.setState({
     teamBCount: this.state.teamBCount + 1 
   });
   
 }

  render() {
    console.log(`render: ${this.state}`);

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
              onPress ={this.teamA}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={this.teamB}>
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
