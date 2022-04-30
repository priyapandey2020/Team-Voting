import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/AppHeader';

export default class GoScreen extends React.Component{
  render(){
    return(
      <View>
      <Header/>
      <Text style = {styles.text}>
             Thank You for your response !
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontWeight: 'bold',
    marginTop: 200,
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    color: 'red'
  },
})