import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  TextInput
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

var numA = 0;
var numB = 0;
var voted = 'false';



export default class HomeScreen extends Component {
  
constructor(){
  super()
  this.state={
      voted:""
    }
}


  teamA=(text)=>{
    this.setState({
      voted:text
      })
    numA = numA +1;
   db.ref('/').update({
     'teamA':numA
   })
 }

 teamB=(text)=>{
   this.setState({
      voted:text
      })
   numB = numB +1;
   db.ref('/').update({
     'teamB':numB
   })
 }

 potato=()=>{
   alert('already voted')
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
              onPress ={()=>{this.state.voted===""?
        this.teamA():this.potato()}}>
              <Text style={{ fontSize:20}}>Team A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress ={()=>{this.state.voted===""?
        this.teamB():this.potato()}}>
              <Text style={{ fontSize:20}}>Team B</Text>
            </TouchableOpacity>

           <TouchableOpacity
           style={styles.buttons}
              onPress ={()=>{alert('Team A: '+numA+'\n'+'Team B: '+numB)}}>
              <Text style={{fontSize:20}}>Results</Text>
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
