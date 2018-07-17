import React, { Component } from 'react';
import {
  FlatList,
  Image
} from 'react-native';

import ScaledImage from './ScaledImage'
class ComicDetail extends Component {

  state = {}
  static navigationOptions = ({ navigation }) =>
    ({
      title: navigation.state.params.comic.title
    })
  render() {
    return (
      <FlatList
        data={this.props.navigation.state.params.comic.photos}
        renderItem={({ item }) =>
          <ScaledImage link={item} />}

        keyExtractor={(item) => item}
      />
    );
  }
}

export default ComicDetail;