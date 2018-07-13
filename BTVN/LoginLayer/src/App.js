import React, { Component } from 'react';
import { View,Text,StyleSheet,Alert } from 'react-native';
import LoginScene from './LoginScene';
class Login extends Component {
    state = { 
        choice:4, 
     }
    render() {
        return (
            <View>
              <LoginScene trueUN = 'qklahpita' truePW = 'nohope'/>
            </View>
        );
    }

}


export default Login;