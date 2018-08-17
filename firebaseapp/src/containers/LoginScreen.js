import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen, white } from '../styles'
import firebase from 'react-native-firebase';
class LoginScreen extends Component {
    state = {
        textError: '',
        email: 'Your email...',
        password: '',
        inSignningUp: false,
        inSignningIn: false,
    }
    _onSignUpPress() {
        const email = this.state.email
        const pass = this.state.password
        this.setState({
            inSignningUp: true,
        })
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, pass)
            .then(res => {
                this.setState({
                    inSignningUp: false,
                })
            })
            .catch(err => {
                this.setState({
                    textError: err.toString(),
                    password: '',
                    inSignningUp: false
                })
            })
    }
    _onSignInPress() {
        const email = this.state.email
        const pass = this.state.password
        this.setState({
            inSignningIn: true,
        })
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, pass)
            .then(res => {
                this.setState({
                    inSignningIn: false,
                })
                console.log(res)
            })
            .catch(err => {
                this.setState({
                    password: '',
                    inSignningIn: false,
                    textError: err.toString()
                })
            })
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled>
                <Image source={require('../../assets/logo_app.jpg')}
                    style={{ width: '100%', height: Dimensions.get('window').width }}
                    resizeMode='contain' />
                <View style={styles.row}>
                    <Image style={styles.icon}
                        source={require('../../assets/ic_email.png')} />
                    <Text style={styles.title}> Email </Text>
                </View>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    autoCorrect={false}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    numberOfLines={2}
                    onChangeText={(text) => {
                        this.setState({
                            email: text
                        })
                    }}
                />

                <View style={styles.row}>
                    <Image style={styles.icon}
                        source={require('../../assets/ic_password.png')} />
                    <Text style={styles.title}> Password </Text>
                </View>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    value={this.state.password}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    numberOfLines={2}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        this.setState({
                            password: text
                        })
                    }} />

                <Text style={styles.error_text}> {this.state.textError}</Text>

                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: primaryColorGreen }]}
                        onPress={() => this._onSignUpPress()}>
                        {this.state.inSignningUp === false
                            ? <Text style={{ color: white, fontWeight: 'bold' }}> Sign Up </Text>
                            : <ActivityIndicator size='small' color={backgroundColor} />}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: primaryColorRed }]}
                        onPress={() => this._onSignInPress()}>
                        {this.state.inSignningIn === false
                            ? <Text style={{ color: white, fontWeight: 'bold' }}> Sign In </Text>
                            : <ActivityIndicator size='small' color={backgroundColor} />}
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView >
        );
    }
}

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    row: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 20,
        height: 20,
    },
    title: {
        marginLeft: 5,
        color: primaryColorBrown,
        width: '100%'
    },
    input: {
        width: '100%',
        paddingVertical: Platform.OS === 'ios' ? 5 : 0,
        borderBottomWidth: 1,
        borderColor: primaryColorBrown,
        width: '100%'
    },
    error_text: {
        color: primaryColorRed,
        marginTop: 10,
    },
    button: {
        height: 60, width: 100,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})