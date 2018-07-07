import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
class ColorfulButton extends Component {
    state = { 

     }
    render() {
        return (
            <TouchableOpacity style = {
                {
                    height: 100,
                    width: 100,
                    backgroundColor: this.props.color,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
                }
                onPress = {()=>this.props.onPress(this.props.color)}
                >
                <Text> {this.props.color} </Text>
            </TouchableOpacity>
            
        );
    }
}

export default ColorfulButton;