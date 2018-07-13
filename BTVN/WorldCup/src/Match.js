import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
class Match extends Component {
    state = { 
     }
    render() {
        return (
            <View style ={stylee.container}>
                <Text>{this.props.time}</Text> 
                    <View style={stylee.solo} >
                        <Text style={stylee.texty}> {this.props.team1.name} </Text>
                        <Image source = {this.props.team1.flag} style = {stylee.flag}/>
                        <Text>   vs  </Text>
                        <Image source ={this.props.team2.flag} style = {stylee.flag}/>
                        <Text style={stylee.texty}> {this.props.team2.name}</Text>
                    </View>
            </View>
        );
    }
}

const stylee = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        borderRadius:10,
        height: 70,
        width:300,
        justifyContent: 'space-around',
        alignItems:'center'
    },
    flag:{
        width:20,
        height: 20
    },
    solo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    texty:{
        width: 100,
        textAlign: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold'
    }
})
export default Match;