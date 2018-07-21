import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Alert
} from 'react-native'
import axios from 'axios'
import { datacore } from './coredata.json'
import moment from 'moment'

class QkWeatherApp extends Component {
  state = {
    temp_city: '',
    cityname: '',
    data: datacore,
    CF: false,
    Ccolor: 'gray',
    Fcolor: 'white',
  }
  search = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.cityname}&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then(res =>
        this.setState({
          data: res.data
        })
      ).catch(err => { Alert.alert('Not found') })
  }

  changToC() {
    this.setState({
      CF: true,
      Ccolor: 'white',
      Fcolor: 'gray',
    })
  }
  changToF() {
    this.setState({
      CF: false,
      Ccolor: 'gray',
      Fcolor: 'white'
    })
  }
  _requireImage(status) {
    switch (status) {
      case 'Clouds': return require('./img/Clouds.png')
      case 'Rain': return require('./img/Rain.png')
      case 'Clear': return require('./img/Clear.png')
      case 'Snow': return require('./img/Snow.png')
      default: return require('./img/Clouds.png')
    }
  }
  _renderItem = ({ item, index }) => index !== 0 ?
    <View style={{ height: 75, width: 300 }}>
      <View style={{ height: 70, flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'rgb(45,43,61)', borderRadius: 5, alignItems: 'center' }}>
        <Text style={{ fontSize: 15, color: 'white', width: 200 }}> {moment().add(index, 'd').format('DD/MM/YYYY')}</Text>
        <Text style={{ fontSize: 15, color: 'white', width: 30 }}>{this.state.CF === false ?  parseInt((this.state.data.list[0].temp.day-273.15)*1.8+32) : parseInt(this.state.data.list[0].temp.day - 273)}  </Text>
        <Image source={this._requireImage(item.weather[0].main)} style={{ height: 50, width: 50 }} />
      </View>
      <View style={{ height: 5 }} />
    </View> : <View />

  _keyExtractor(item) {
    return item.dt.toString()
  }

  render() {
    return (
      <View style={st.container}>
        <View style={st.header}>
          <TextInput
            style={st.textinput}
            placeholder={'City...'}
            autoCorrect={false}
            onChangeText={(text) => this.setState({ cityname: text })}
          />
          <TouchableOpacity
            style={st.button}
            onPress={() => this.search()}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Search </Text>
          </TouchableOpacity>
        </View>
        <Text style={st.title} > {this.state.data.city.name} </Text>
        <Text style={st.date} >{moment().format('DD/MM/YYYY')} </Text>

        <View style={st.current}>
          <View style={st.itemincurrent}>
            <Image style={{ height: 100, width: 100 }} source={this._requireImage(this.state.data.list[0].weather[0].main)} />
            <Text style={st.status}> {this.state.data.list[0].weather[0].description} </Text>
          </View>
          <View style={st.itemincurrent}>
            <Text style={st.temperate}> {this.state.CF === false ? parseInt((this.state.data.list[0].temp.day-273.15)*1.8+32) : parseInt(this.state.data.list[0].temp.day - 273)} </Text>
            <View style={st.buttonCF}>
              <TouchableOpacity
                onPress={() => this.changToF()}>
                <Text style={{ fontSize: 20, color: this.state.Fcolor }}>°F</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.changToC()}>
                <Text style={{ fontSize: 20, color: this.state.Ccolor }}>°C</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <FlatList
          style={{ maxHeight: 300, }}
          data={this.state.data.list}
          keyExtractor={(item) => this._keyExtractor(item)}
          renderItem={({ item, index }) => this._renderItem({ item, index })} />
      </View >
    );
  }
}

const st = StyleSheet.create({
  buttonCF: {
    flexDirection: 'row',
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  status: {
    color: 'white',
    fontSize: 20,
  },
  temperate: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white'
  },
  itemincurrent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  flatitem: {

  },
  current: {
    flexDirection: 'row',

  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  date: {
    fontSize: 20,
    color: 'white',
  },
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
    backgroundColor: 'white'
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
export default QkWeatherApp;