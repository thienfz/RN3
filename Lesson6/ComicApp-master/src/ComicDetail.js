import React, { Component } from 'react';
import {
  Text,
  FlatList,
  Image
} from 'react-native';

class ComicDetail extends Component {
 
  state = {  }
 
  render() {
    return (
      <FlatList
        data = {this.props.navigation.state.params.comic.photos}
        renderItem = { ({item}) =>
          <Image 
          source ={{uri: item}} 
          style={{height:300}}/>}

        keyExtractor = {(item)=>item}
      />
    );
  }
}

export default ComicDetail;