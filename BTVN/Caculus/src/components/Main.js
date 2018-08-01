import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import { pressed } from '../actions'


class Main extends Component {
  state = { 
      dm: Dimensions.get('window')
   }
  render() {
    return (
        <ImageBackground
        source={{ uri: `https://picsum.photos/${this.state.dm.width}/${this.state.dm.height}/?random&&blur` }}
        style={{ height: this.state.dm.height, width: this.state.dm.width, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ margin: 20, fontSize: 40, color: 'cyan', fontWeight: 'bold', alignItems: 'center' }}>
          {this.props.value} </Text>

        <TouchableOpacity onPress={()=>this.props.pressed(1)}
          style={{ margin: 20, height: 100, width: 200, borderRadius: 20, backgroundColor: 'rgba(0,255,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 30 }}> *p++ </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.pressed(-1)}  
          style={{ margin: 20, height: 100, width: 200, borderRadius: 20, backgroundColor: 'rgba(0,255,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 30 }}> *p-- </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProp = ({value}) =>({value})
export default connect(mapStateToProp,{pressed})(Main);