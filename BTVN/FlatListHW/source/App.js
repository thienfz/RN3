import React, { Component } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  Linking,
  Image
} from 'react-native';
import { courseData } from './courseData.json'

class App extends Component {
  state = {}


  makeButton = item =>
    <View>
      <View style={{ height: 5 }} />
      <TouchableOpacity
        navigation={this.props.navigation}
        style={sty.button}
        onPress={() => Linking.openURL(item.link)}>
        <Image source={{ uri: item.icon }} style={{ height: 80, width: 80, resizeMode: 'cover' }} />
        <View style={sty.info}>
          <Text style ={{fontFamily:'Courier',fontSize:15,fontWeight:'bold', marginLeft:20}}>
              {item.name} </Text>
          <Text style={{fontFamily:'Arial',fontSize:12, marginLeft:20}}>
             {item.cost}</Text>
          <Text style={{fontFamily:'Arial',fontSize:12, marginLeft:20}}>
             {item.time}</Text>
        </View>
      </TouchableOpacity>
    </View>

  render() {
    return (
      <View style={sty.container}>
        <View style={sty.header}>
          <Image source={{ uri:'https://img.clipartxtras.com/9f9e718ee30e9e110a10f558791e9cde_red-arrow-image-free-download-clip-art-free-clip-art-on-red-clipart-arrow_648-548.gif' }}
            style={sty.arrow} />
          <Text style ={{fontSize:20}}>Homepage</Text>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_South_Vietnam.svg/2000px-Flag_of_South_Vietnam.svg.png' }}
            style={sty.bagach} />
        </View>
        <FlatList
          data={courseData}
          renderItem={({ item }) => this.makeButton(item)}
        />
      </View>
    );
  }
}

const sty = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'gray',
    flex: 1,
    paddingTop: 20,
  },
  button: {
    backgroundColor: 'orange',
    height: 80,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row'
  },
  info: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width-80,
    height:80
  },
  arrow: {
    height: 80,
    width: 100,
    resizeMode: 'cover'
  },
  bagach: {
    height: 80,
    width: 40,
    resizeMode: 'cover'
  }
})
export default App; 