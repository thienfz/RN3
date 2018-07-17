import React, { Component } from 'react';
import { 
  Text
 } from 'react-native';
 import { createStackNavigator } from 'react-navigation';
 import Detail from './Detail'
 import MainScreen from './MainScreen'
const Navigation = createStackNavigator({
  Main:{
    screen: MainScreen,
    navigationOptions: 
      {title: 'Main'}
    
  },
  Detail:{
    screen: Detail
  }
})
 class Navi extends Component {
   state = {  }
   render() {
     return (
       <Navigation/>
     );
   }
 }
 
 export default Navi;