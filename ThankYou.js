import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class ThankYou extends Component{
  render(){
    return(
      <View>
      <Text style ={{color:'blue', marginTop: 200, fontSize:30,textAlign:'center',fontFamily:'cursive',fontStyle:'italic',fontWeight:"bold"}}>Thank You For Voting</Text>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
 
})
