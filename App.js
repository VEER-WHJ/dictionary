import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <SafeAreaProvider>
        <HomeScreen />
        </SafeAreaProvider>
      </View>
    )
  }
}