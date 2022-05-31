import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.teamB}>
          You voted for Team B!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    teamB:{
     marginTop:75,
     marginLeft:50,
     marginRight:50,
     fontSize: 20,
     color: '#008B8B'
    }
  })