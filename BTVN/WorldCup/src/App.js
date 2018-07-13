import React, { Component } from 'react';
import { View ,StyleSheet, ImageBackground,Text, Image, Dimensions} from 'react-native';
import Schedule from './Schedule';
class WorldCup extends Component {
  state = {  }
  render() {
    return (
      <ImageBackground source = {wallpaper} style = {stylist.container}>
        <View style={stylist.container}>
          <Text style = {stylist.title}>Schedule</Text>
          <Image source ={ball} style={{height: 150, width: 150, backgroundColor: '#0000'}}/>
          <Text style = {stylist.name}>WorldCup 2018</Text>
          <Schedule/>
        </View>
      </ImageBackground>
    );
  } 
}

const stylist = StyleSheet.create({
  container:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  title:{
    color: 'red',
    fontFamily:'Arial',
    fontSize: 40,
    fontWeight: 'bold'
  },
  name:{
    color:'cyan',
    fontSize: 30,
    fontFamily: 'Courier',
    fontWeight: 'bold'
  }
  
})
const wallpaper = {
  uri: 'https://i.pinimg.com/originals/ce/73/2a/ce732a071c45b94a5fd783ce3f4c9ba6.jpg'
}
const ball = {
  uri: 'https://i.imgur.com/5AMLR3v.png'
}
export default WorldCup;