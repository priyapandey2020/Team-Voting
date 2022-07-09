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

  constructor(props){
    super(props);

    this.state = {
      pressA: 0,
      pressB: 0,
      disabledA: false,
      disabledB: false
    }
  }

  teamA(){
   db.ref('/').update({
     'teamA':1
   })

   this.setState({pressA:1,disabledA:true});
 }

 teamB(){
   console.log(db);
   db.ref('/').update({
     'teamB':2
   })

   this.setState({pressB:1,disabledB:true});
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
              disabled={this.state.disabledA}
              style={
                this.state.pressA == 1 ? [styles.buttons,{backgroundColor: "red"}]: [styles.buttons,{backgroundColor: "yellow"}]
              }
              onPress ={this.teamA()}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={this.state.disabledB}
              style={
                this.state.pressB == 1 ? [styles.buttons,{backgroundColor: "red"}]: [styles.buttons,{backgroundColor: "yellow"}]
              }
              onPress ={this.teamB()}>
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
