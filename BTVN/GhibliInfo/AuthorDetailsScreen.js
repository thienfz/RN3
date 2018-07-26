import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios'
class AuthorDetailsScreen extends Component {
    state = {
        h: Dimensions.get('window').height,
        w: Dimensions.get('window').width,
        data: {},
        films: {},
    }

    componentWillMount() {
        this.setState({
            data: this.props.navigation.state.params.data,
        })
        axios.get(`${this.props.navigation.state.params.data.films[0]}`)
        .then((res)=>{
            this.setState({
                films:res.data
            })
        })
    }


    render() {
        return (
            <ImageBackground
                source={{ uri: `https://picsum.photos/${this.state.w}/${this.state.h}?random&&blur` }}
                style={sty.container}>
                <View>
                    <Text style={sty.name}> Name: {this.state.data.name}  </Text>
                    <Text style={sty.gender}> Gender {this.state.data.gender} </Text>
                    <Text style={sty.age}> Age: {this.state.data.age} </Text>
                    <Text style={sty.eye}> Eye color: {this.state.data.eye_color} </Text>
                    <Text style={sty.hair}> Hair color: {this.state.data.hair_color} </Text>
                    <Text> Films: {this.state.films.title} </Text>
                    <TouchableOpacity> Get more about film... </TouchableOpacity> 

                </View>
            </ImageBackground>
        );
    }
}
const sty = StyleSheet.create({
    eye: {
        fontSize: 16,
        color: 'black',
        height: 30,
    },
    hair: {
        fontSize: 16,
        color: 'black',
        height: 30,
    },
    name: {
        marginTop: 50,
        fontSize: 40,
        color: 'blue',
        fontWeight: 'bold',
        height: 100,
    },
    gender: {
        fontSize: 16,
        color: 'black',
        height: 30,
    },
    age: {
        fontSize: 16,
        height: 30,
        color: 'black',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    }
})
export default AuthorDetailsScreen;