import React, { Component } from 'react';
import {
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
class Item extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity 
            style={sty.container}
            >
                <Image 
                    source={{uri: this.props.data.photos[0]}}
                    style={sty.img} />
                <Text style={sty.title}>{this.props.data.title}</Text>
            </TouchableOpacity>
        );
    }
}
const sty = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2-10,
        height: Dimensions.get('window').width / 2-10,
        backgroundColor: 'gray',
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: 'gray',
    },
    img: {
        resizeMode: 'cover',
        height: Dimensions.get('window').width / 2-60,
        width: Dimensions.get('window').width / 2-20,
    }
})

export default Item;