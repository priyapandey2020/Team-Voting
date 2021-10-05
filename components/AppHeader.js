import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Team Voting App</Text>
        
      </View>
    <View style = {styles.textContainer}>
      <TouchableOpacity style ={styles.button}>
        <Text style = {styles.text}>TeamA</Text>

      <Text style= {styles.button}>TeamB</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#FFC300'
  },
  text:{
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  button : {
    color :"red",
    borderRadius :10
  }
});

