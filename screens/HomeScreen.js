import { database } from 'firebase';
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
      'teamA': 0,
      'teamB': 0
    }
  }

  getTeams = async () => {
    var teamARef = await db.ref('/TeamA');
    teamARef.on('value',(data)=>{
      this.setState({
        'teamA': data.val()
      })
    })

    var teamBRef = await db.ref('/TeamB');
    teamBRef.on('value', (data)=>{
      this.setState({
        'teamB': data.val()
      })
    })
  }

  updateTeamA = () => {
    this.state.teamA = this.state.teamA + 1;
    db.ref('/').update({
      'TeamA': this.state.teamA
    })
  }

  updateTeamB = () => {
    this.state.teamB = this.state.teamB + 1;
    db.ref('/').update({
      'TeamB': this.state.teamB
    })
  }

  componentDidMount(){
    this.getTeams();
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
                source={{uri: 'https://raw.githubusercontent.com/ParthKshirsagar/Team-Voting/main/assets/TeamImage.png'}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center',fontSize:25 }}>Vote Here</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress ={()=>{
                this.updateTeamA();
                alert("Thank you for voting!!");
              }}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={()=>{
                this.updateTeamB();
                alert("Thank you for voting!!")
              }}>
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
