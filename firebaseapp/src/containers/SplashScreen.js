import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import { backgroundColor } from '../styles'
class SplashScreen extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/logo_app.jpg')}
                    style={{ width: '100%', height: Dimensions.get('window').width }}
                    resizeMode='contain' />
            </View>
        );
    }
}

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})