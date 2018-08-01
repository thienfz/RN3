import React, { Component } from 'react';
import {
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { connect } from 'react-redux'
import { pressButton } from '../actions'
const store = createStore(rootReducer)

class Caculus extends Component {
  state = {

  }
  render() {
    return (
      <Provider store={store}>
        <ImageBackground
          style={{ justifyContent: 'center', alignItems: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
          source={{ uri: `https://picsum.photos/${Dimensions.get('window').width}/${Dimensions.get('window').height}/?random` }}>

          <Text style={{ height: 100, width: 200, color: 'black', fontSize: 20, fontWeight: 'bold' }}> 567 </Text>

          <TouchableOpacity onPress={this.props.pressButton('add')}
            style={{ height: 100, width: 100, borderRadius: 20, backgroundColor: 'yellow' }}>
            <Text style={{ fontSize: 20, color: 'cyan' }}> *p++ </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.pressButton('sub')}
            style={{ height: 100, width: 100, borderRadius: 20, backgroundColor: 'yellow' }}>
            <Text style={{ fontSize: 20, color: 'cyan' }}> *p-- </Text>
          </TouchableOpacity>

        </ImageBackground>
      </Provider>
    );
  }
}

const mapStateToProps = (store) => ({
  value: store.value
})
export default connect(mapStateToProps, { pressButton })(Caculus);