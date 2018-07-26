import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox'
import { categoryBirthday, white, gray, categoryPersonal, categoryEvent, categoryTodo, categoryShopping } from '../styles';
class ItemTask extends Component {
    state = {}
    render() {
        return (
            <View style={st.container}>
                <RoundCheckbox />
                <Text style={st.time}>{this.props.task.time}</Text>
                <TouchableOpacity style={st.details}>
                    <Text style={st.taskname}> {this.props.task.category} </Text>
                    <Text style={st.taskdetails}> {this.props.task.content} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const st = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    time: {
        marginStart: 20,
        width: 40,
        color: gray
    },
    details: {
        flexDirection: 'column',
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'rgb(219, 49, 190)',
        padding: 15,
        marginStart: 20
    },
    taskname: {
        color: white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    taskdetails: {
        color: white,
        fontSize: 14,
        opacity: 0.8,
        marginTop: 5,
    }
})

export default ItemTask;
