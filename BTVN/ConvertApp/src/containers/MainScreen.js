import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import stylist from '../stylist';
class MainScreen extends Component {
    state = {}
    render() {
        return (
            <ImageBackground
                style={stylist.fullscreen}
                source={{ uri: `https://picsum.photos/${Dimensions.get('window').width}/${Dimensions.get('window').height}/?random&&blur` }}>

                <TouchableOpacity
                    style={[stylist.chooseButton, stylist.center]}
                    onPress={() => this.props.navigation.navigate('LengthScreen')}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>  {`Length Convert`} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[stylist.center, stylist.chooseButton]}
                    onPress={() => this.props.navigation.navigate('WeightScreen')}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>  {`Weight Convert`} </Text>
                </TouchableOpacity>

            </ImageBackground>
        );
    }
}

export default MainScreen;