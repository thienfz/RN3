import React, { Component } from 'react';
import { Text,View } from 'react-native';
import ComicListItem from './ComicListItem'
import ComicScreen from './ComicScreen';
class App extends Component {
  state = {  }
  render() {
    return (
      <View>
        <ComicScreen/>
      </View>
    );
  }
}

export default App;