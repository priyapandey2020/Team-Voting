import React, {Component} from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Header,
    Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class Team2Screen extends Component{
    render(){
        return(
            <View>
                <AppHeader/>
                <Text>You have voted for Team 2</Text>
            </View>
        )
    }    
}