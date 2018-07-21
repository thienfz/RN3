import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import axios from 'axios'
class HeroesDetails extends Component {
    state = {
        hero: []
    }
    componentDidMount(){
        axios.get(`https://api.opendota.com/api/heroStats`)
            .then(res => this.setState({
                hero: res.data,
            }))
    }
    render() {
        return (
          <View style = {st.button}>
            <Text> {this.state.hero.name}</Text> 
          </View>
        );
    }
}
const st = StyleSheet.create({
    button: {
        height: 100,
        width: '100%',
        backgroundColor: 'yellow'
}
})

export default HeroesDetails;
