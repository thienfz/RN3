import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import Orientation from 'react-native-orientation';

import { data } from './database.json'
import ComicListItem from './ComicListItem';

class ComicListScreen extends Component {
  state = {}

  renderItem = ({item}) => <ComicListItem 
  comic={item} 
  navigation = {this.props.navigation}/>

  keyExtractor = (item, index) => item.id

  render() {
    Orientation.lockToPortrait()
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        numColumns='2'
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default ComicListScreen;