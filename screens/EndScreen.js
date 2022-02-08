import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  ImageBackground,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';
export default class EndScreen extends React.Component{
render(){
    return(
      <View style={{height:500}}>
<ImageBackground
source={{uri:'https://th.bing.com/th/id/OIP.mPvnCwYu382Gv5YuFDOHnwHaJl?pid=ImgDet&rs=1'}}
resizeMode="cover"
style={{justifyContent: "center"}}
>
<View style={{height:500}}>
      <Text style={styles.text}>
      Your Answer is Submitted!
 
      </Text>
         <Text style={styles.text2}>
    ThankYou
      </Text>
        </View>
      </ImageBackground>
      </View>
    )
}
}
const styles= StyleSheet.create({
  text:{
    textAlign:"center",
    marginTop:230,
    fontSize:20,
    fontFamily:"Times New Romen",
    color:"red",
    marginLeft:10
  },
   text2:{
    textAlign:"center",
    marginTop:20,
    fontSize:20,
    fontFamily:"Times New Romen",
     color:"red"
  }
})