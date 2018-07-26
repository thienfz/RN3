import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {createStackNavigator} from 'react-navigation'

import AuthorScreen from './AuthorScreen'
import AuthorDetailsScreen from './AuthorDetailsScreen'
import FilmScreen from './FilmScreen'
import FilmDetailsScreen from './FilmDetailsScreen'
import StartScreen from './StartScreen';

const Navigation = createStackNavigator({
  Start:{
    screen: StartScreen,
    navigationOptions: ({navigation}) =>(
      {title: 'Welcome to Ghibli Studio'}
    )
  },
  Authors:{
    screen: AuthorScreen,
    navigationOptions: ({navigation}) =>(
      {title: 'Authors'}
    )
  },
  Films:{
    screen: FilmScreen, 
    navigationOptions: ({navigation}) =>(
      {title: 'Films'}
    )
  },
  AuthorDetails:{
    screen: AuthorDetailsScreen,
  },
  FilmDetails:{
    screen: FilmDetailsScreen
  }
})
class Ghibli extends Component {
  state = {}
  render() {
    return (
      <Navigation />
    );
  }
}

export default Ghibli;