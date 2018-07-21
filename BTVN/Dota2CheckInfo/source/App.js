import React, { Component } from 'react';
import { 
  View, 
  Text
 } from 'react-native';
 import {createStackNavigator} from 'react-navigation'

 import LoginScene from './LoginScene'
 import AccountScene from './AccountScene'
 
 const Navigation = createStackNavigator({
   Login:{
     screen: LoginScene,
     navigationOptions: ({navigation}) => (
      {title: 'Input your Account ID'}
    )
   },
   Account:{
    screen: AccountScene,
   }
 })

 class AppHW extends Component {

   state = { 
     name: ''
    }
   render() {
     return (
      <Navigation/>
     );
   }
 }
 
 export default AppHW;    