import * as React from 'react';
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class JokeScreen extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.teamA}>
          You voted for Team A!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    teamA:{
     marginTop:75,
     marginLeft:50,
     marginRight:50,
     fontSize: 20,
     color: '#A52A2A'
    }
  })