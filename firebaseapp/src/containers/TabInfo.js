import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Platform
} from 'react-native';
import { primaryColorRed, backgroundColor, primaryColorBrown } from '../styles';

class TabInfo extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Information </Text>
        <View style={styles.row}>
          <Image source={require('../../assets/ic_location.png')}
            style={{ height: 30, width: 30 }} />
          <TextInput
            value={this.state.location}
            autoCorrect={false}
            onChangeText={(text) => this.setState({
              location: text,
            })}
            style={styles.input}
          />
        </View>

        <View style={styles.row}>
          <Image source={require('../../assets/ic_username.png')}
            style={{ height: 30, width: 30 }} />
          <TextInput
            value={this.state.username}
            autoCorrect={false}
            onChangeText={(text) => this.setState({
              username: text,
            })}
            style={styles.input}
          />
        </View>

        <View style={styles.row}>
          <Image source={require('../../assets/ic_phone_number.png')}
            style={{ height: 30, width: 30 }} />
          <TextInput
            value={this.state.phoneNumber}
            autoCorrect={false}
            onChangeText={(text) => this.setState({
              phoneNumber: text,
            })}
            style={styles.input}
          />
        </View>

      </View>
    );
  }
}

export default TabInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 40,
    backgroundColor: backgroundColor,
  },
  title: {
    color: primaryColorRed,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginLeft: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 30,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 50,
    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    borderBottomWidth: 1,
    borderColor: primaryColorBrown,
  }
})