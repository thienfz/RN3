import React, { Component } from 'react';
import {
  View,
  Text,
  SectionList,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native';
import { menu } from './sectionlist-db.json'
class Menu extends Component {
  state = {

  }
  _renderItem = ({ item }) =>
    <View style={ss.item} >
      <Image style={{ height: 200, width: 200, borderRadius: 10 }}
        source={{ uri: item.image }} />
      <Text style={ss.foodname}> {item.title} </Text>
      <Rating rate={item.rate} />
    </View>
  _renderSectionHeader = ({ section: { category } }) =>
    <View style={ss.title2}>
      <View style={ss.title}>
        <Text style={ss.titletext}>{category}</Text>
      </View>
    </View>

  render() {
    return (
      <ImageBackground
        style={ss.container}
        source={{ uri: `https://picsum.photos/${Dimensions.get('window').height}/${Dimensions.get('window').width}/?random&&blur` }}>
        <SectionList
          sections={menu}
          renderItem={this._renderItem}
          renderSectionHeader={this._renderSectionHeader}
          keyExtractor={(item, index) => item + index} />
      </ImageBackground>
    );
  }
}

const Rating = ({ rate }) =>
  <View style={ss.rating}>
    {Array.from(new Array(rate)).map(item => <Image style={{ height: 20, width: 20 }}
      source={{ uri: 'https://png.icons8.com/ios/50/000000/christmas-star-filled.png' }} />
    )}
  </View>

const ss = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodname: {
    paddingTop: 20,
    fontFamily: 'Courier',
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionlist: {
    paddingTop: 50,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletext: {
    fontSize: 35,
    color: 'blue',
    fontWeight: 'bold',
    flex: 1,
  },
  title: {
    height: 50 - 5,
    width: Dimensions.get('window').width - 5,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title2: {
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },


})

export default Menu;