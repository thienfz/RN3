import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { gray, white } from '../styles';
class ItemDate extends Component {
    state = {}
    render() {
        const dayOfWeek = this.props.date.substring(0,this.props.date.indexOf(" "));
        const date = this.props.date.substring(this.props.date.indexOf(" ")+1)
        return (
            <View style = {st.container}>
                <Text style = {st.dayOfWeek}>{dayOfWeek}</Text>
                <Text style = {st.date}>{date}</Text>
            </View>
        );
    }
}

const st = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin:15,
        alignItems:'flex-end',
    },
    dayOfWeek:{
        width: 100,
        fontSize: 20,
        fontWeight:'bold',
    },
    date:{
        fontSize: 12,
        color: gray
    }
})

export default ItemDate;