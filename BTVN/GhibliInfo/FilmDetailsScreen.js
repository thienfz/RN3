import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions
} from 'react-native';
class FilmDetailsScreen extends Component {
    state = {
        w: Dimensions.get('window').width,
        h: Dimensions.get('window').height,
    }
    render() {
        return (
            <ImageBackground
                style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}
                source={{ uri: `https://picsum.photos/${this.state.w}/${this.state.h}?random&&blur` }}>
                <Text style={ss.title}> {this.props.navigation.state.params.data.title} </Text>
                <Text style={ss.description}> {this.props.navigation.state.params.data.description} </Text>
                <Text style={ss.director}> Director: {this.props.navigation.state.params.data.director} </Text>
                <Text style={ss.producer}> Producer: {this.props.navigation.state.params.data.producer} </Text>
                <Text style={ss.release_date}> Release Date:  {this.props.navigation.state.params.data.release_date} </Text>
                <Text style={ss.rt_score}> RT Score: {this.props.navigation.state.params.data.rt_score} </Text>
            </ImageBackground>
        );
    }
}

const ss = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        color: 'blue'
    },
    description: {
        padding: 10,
        fontSize: 14,
        color: 'gray',
    },
    director: {
        color: 'red',
        fontSize: 20,
        padding: 10,
    },
    producer: {
        color: 'red',
        fontSize: 20,
        padding: 10,
    },
    release_date: {
        color: 'black',
        fontSize: 16,
        padding: 10,

    },
    rt_score: {
        color: 'black',
        fontSize: 16,
        padding: 10,

    }
})
export default FilmDetailsScreen;