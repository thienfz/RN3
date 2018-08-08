import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList
} from 'react-native';
import { rightTextChange, leftTextChange } from '../actions'
import stylist from '../stylist';
import Button from '../components/Button';
import { connect } from 'react-redux'
const data = [
  {
    name: 'Millimeter',
    toMeter: 0.001,
    shorten: 'mm'
  },
  {
    name: 'Centimeter',
    toMeter: 0.01,
    shorten: 'cm'
  },
  {
    name: 'Decimeter',
    toMeter: 0.1,
    shorten: 'dm'
  },
  {
    name: 'Meter',
    toMeter: 1,
    shorten: 'm'
  },
  {
    name: 'Decameter',
    toMeter: 10,
    shorten: 'dam'
  },
  {
    name: 'Hectometer',
    toMeter: 100,
    shorten: 'hm'
  },
  {
    name: 'Kilometer',
    toMeter: 1000,
    shorten: 'km'
  }
]

class LengthScreen extends Component {
  state = {}
  _renderItemLeft = ({ item, index }) => <Button data={item} index={index} lr={'l'} />
  _renderItemRight = ({ item, index }) => <Button data={item} index={index} lr={'r'} />

  render() {
    console.log(this.props.keyData)
    console.log(this.props.left_text)
    console.log(this.props.right_text)
    return (
      <View style={[stylist.fullscreen, stylist.center, { flexDirection: 'row' }]}>

        <View style={stylist.flatlist}>
          <TextInput style={stylist.textinput}
            autoCorrect={false}
            value={String(
              this.props.keyData.right / this.props.keyData.left * this.props.right_text
            )
            }
            onChangeText={(text) => this.props.leftTextChange(text)} />
          <FlatList
            data={data}
            renderItem={({ item, index }) => this._renderItemLeft({ item, index })}
            keyExtractor={(item, index) => item + index} />
        </View>



        <View style={stylist.flatlist}>
          <TextInput style={stylist.textinput}
            autoCorrect={false}
            value={String(
              this.props.keyData.left / this.props.keyData.right * this.props.left_text
            )}
            onChangeText={(text) => this.props.rightTextChange(text)} />
          <FlatList
            data={data}
            renderItem={({ item, index }) => this._renderItemRight({ item, index })}
            keyExtractor={(item, index) => item + index} />
        </View>

      </View>
    );
  }
}
const mapStateToProp = ({ left_text, right_text, keyData }) => ({ left_text, right_text, keyData })
export default connect(mapStateToProp, { rightTextChange, leftTextChange })(LengthScreen);