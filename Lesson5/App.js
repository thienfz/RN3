import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import ColorButton from './ColorButton'
class App extends Component {
  //state
  state = { 
    backgroundColor: 'pink'
   }

 changeBackground = params=>  this.setState({backgroundColor:params})

  render() {
    return (
      // props 
      <View style={{backgroundColor:this.state.backgroundColor}}>
        <ColorButton color = 'yellow' onPress = {this.changeBackground}/>
        <ColorButton color = 'red' onPress = {this.changeBackground}/>
        <ColorButton color = 'cyan' onPress = {this.changeBackground}/>
        <ColorButton color = 'pink' onPress = {this.changeBackground}/>

        {/* <Button
        title = 'Press'
        onPress={()=>this.setState({backgroundColor:'green'})} */}
      </View>
      
    );
  }
}

export default App;