import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  
} from 'react-native';
 
 export default class NextScreen extends Component{
   render(){
     return(
       <View>
       <Text style = {styles.thankyou} >THANK YOU FOR VOTING!!!</Text>
       </View>
     )
     
     
   }
 }
 const styles = StyleSheet.create({
   
   thankyou:{
     fontSize:30,
     backgroundColor:"mistyrose",
     fontFamily:"cursive",
     fontWeight:4,
     alignSelf:"center",
     marginTop:130,
     textAlign: 'center',
     padding:20 
   }
 })