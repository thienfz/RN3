import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import axios from 'axios'

class QkWeatherApp extends Component {
  state = {
    temp_city: '',
    cityname: 'hanoi',
    data: {}
  }
  componentWillMount(){
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=hanoi&appid=927d09bc49dbee6aac7f5cb1df707542`)
    .then(res=>console.log('hi'))
  }
  search = () =>{
    
  }
  render() {
    return (
      <View style={st.container}>
        <View style={st.header}>
          <TextInput
            style={st.textinput}
            placeholder={'City...'}
            autoCorrect = {false}
           />
          <TouchableOpacity
            style={st.button}
            onPress = {()=>this.search()}>
            <Text style = {{fontSize: 20, fontWeight: 'bold'}}> Search </Text>
          </TouchableOpacity>
        </View>
        <Text> {this.state.data.message} </Text>
      </View>
    );
  }
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(56,54,74)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 100,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textinput: {
    height: 40,
    width: 200,
    borderRadius: 5,
    backgroundColor:'white'
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default QkWeatherApp; <View>
</View>