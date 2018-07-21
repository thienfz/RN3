import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
class LoginScene extends Component {
    state = {
        accountID: 0,
    }
    render() {
        return (
            <View style={sty.container}>
                <TextInput 
                    style={sty.input} 
                    onChangeText = {(text)=>this.setState({accountID: text})}
                    placeholder = {'Account ID...'}/>
                <View style = {{height:10}}/> 
                <TouchableOpacity 
                    style={sty.loginbutton}
                    onPress = {()=>this.props.navigation.navigate('Account',{ID:this.state.accountID})}>
                    <Text style={sty.textbutton}> Show details </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const sty = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan'
    },
    loginbutton: {
        height: 50,
        width: 300,
        borderRadius: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textbutton: {
        fontSize: 20,
        fontFamily: 'Courier',
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        width: 300,
        borderRadius: 10,
        backgroundColor: 'white',
    }
})
export default LoginScene;