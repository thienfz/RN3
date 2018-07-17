import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

class ComicListItem extends Component {
  state = {}
  render() {
    this.props.navigation.navigationOptions
    return (
      <TouchableOpacity style={styles.container}
        onPress={() => this.props.navigation.navigate('ComicDetail',
          { comic: this.props.comic })}>
        <Image
          style={styles.image}
          source={{ uri: this.props.comic.photos[0] }} />
        <Text
          style={styles.text}
          numberOfLines={2}
        >{this.props.comic.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

//1 inch ~ 160dp

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Dimensions.get('window').width / 2,
    padding: 5,
  },
  image: {
    height: 200
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ComicListItem;