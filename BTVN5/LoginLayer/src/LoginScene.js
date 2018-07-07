import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, ImageBackground, Alert, Linking } from 'react-native';
class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin() {
        const { username, password } = this.state;
        if (username == this.props.trueUN && password == this.props.truePW)
            Alert.alert('Successfully login', 'Do you wanna continue?', [
                { text: 'Yes', onPress: () => { Linking.openURL('https://pornhub.com') } },
                { text: 'No', onPress: () => { console.log('out') } },
            ], { cancelable: false })
        else Alert.alert(`Wrong Account`)
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('./background.png')} style={st.backgroundImg}>
                    <View style={st.contain}>
                        <Image source={require('./pornhub.png')} style={st.cover} />
                        <View style={st.type}>
                            <TextInput
                                style={st.input}
                                placeholder=' Type your account...'
                                placeholderTextColor='rgb(117,117,117)'
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={this.state.username}
                                onChangeText={(username) => this.setState({ username })}
                            ></TextInput>
                            <TextInput
                                style={st.input}
                                placeholder=' Type your password...'
                                placeholderTextColor='rgb(117,117,117)'
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={(password) => this.setState({ password })}
                                secureTextEntry={true}
                            ></TextInput>
                            <TouchableOpacity 
                                style={st.button}
                                onPress={() => this.onLogin()}>
                                    <Text>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>

        );
    }

}


const st = StyleSheet.create({
    contain: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    backgroundImg: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        resizeMode: 'contain'
    },
    cover: {
        height: 200,
        width: Dimensions.get('window').width,
        resizeMode: 'contain'
    },
    type: {
        height: 150,
        width: Dimensions.get('window').width,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 300,
        color: 'rgb(117,117,117)',
        backgroundColor: 'rgb(43,42,41)',
        borderRadius: 5,
    },
    button: {
        height: 40,
        width: 300,
        backgroundColor: 'orange',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})
export default LoginScene;