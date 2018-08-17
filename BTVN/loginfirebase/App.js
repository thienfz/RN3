import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from 'react-native-firebase';

class loginfirebase extends Component {
  state = {
    phonenumber: '',
  }
  login = () => {
    firebase.auth().signInAnonymouslyAndRetrieveData()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <ImageBackground style={styles.container}
        source={{ uri: `https://picsum.photos/${Dimensions.get('window').width}/${Dimensions.get('window').height}/?blur&&random` }}>
        <Text style={styles.login}> Login with Anonymous </Text>
        <TextInput style={styles.input}
          placeholder={'Input your phone number...'}
          autoCorrect={false}
          onChangeText={(text) => this.setState({
            phonenumber: text
          })} />
        <TouchableOpacity style={styles.button}
          onPress={() => this.login()}>
          <Text>Login</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

export default loginfirebase;

const styles = StyleSheet.create({
  button: {
    height: 50, width: 150,
    backgroundColor: 'rgba(255,255,0,0.4)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50, width: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
  },
  login: {
    fontSize: 20,
    color: 'rgba(0,0,255,0.8)',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})