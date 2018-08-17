import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import TabHistory from './TabHistory'
import TabMenu from './TabMenu'
import TabOrder from './TabOrder'
import TabInfo from './TabInfo'

const BottomNavigation = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  History: TabHistory,
  Info: TabInfo,
})

const SwitchNavigation = createSwitchNavigator({
  HomeScreen: BottomNavigation,
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
})
class Main extends Component {
  state = {}
  render() {
    return (
      <SwitchNavigation />
    );
  }
}

export default Main;