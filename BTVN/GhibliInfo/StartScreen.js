import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';
class StartScreen extends Component {
    state = {
        h: Dimensions.get('window').height,
        w: Dimensions.get('window').width,
        loading: false,
    }
    getRandomImage(){
        return {uri:`https://picsum.photos/g/${this.state.w}/${this.state.h}?random&&blur`}
    }
    render() {
        return (
            <ImageBackground
                source={this.getRandomImage()}
                style={{ flex: 1,justifyContent: 'center', alignItems:'center'}}>
                <TouchableOpacity
                    style={{ height: 100, width: 300, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,255,0.7)' }}
                    onPress={() => this.props.navigation.navigate('Authors')}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> Authors </Text>
                </TouchableOpacity>
                <View style={{ height: 50 }} />
                <TouchableOpacity
                    style={{ height: 100, width: 300, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,255,0.7)' }}
                    onPress={() => this.props.navigation.navigate('Films')}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> Films </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default StartScreen;