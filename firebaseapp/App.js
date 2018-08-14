import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import firebase from 'react-native-firebase'
import Main from './src/containers/Main'
class firebaseapp extends Component {
  state = {}
  componentDidMount() {
    console.log(firebase)
  }
  render() {
    return (
      <View>
        <Main />
      </View>
    );
  }
}

export default firebaseapp;