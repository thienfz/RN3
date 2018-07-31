import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox'
import { categoryBirthday, white, gray, categoryPersonal, categoryEvent, categoryTodo, categoryShopping, calendarHighlight } from '../styles';
import { chooseColorByCategory } from '../util';
class ItemTask extends Component {
    state = {
        taskDone: false,

    }

    toogleTask = newValue => this.setState({ taskDone: newValue })

    render() {
        return (
            <View style={st.container}>
                <RoundCheckbox
                    checked={this.state.taskDone}
                    onValueChange={this.toogleTask}
                    backgroundColor={calendarHighlight} />
                <Text style={st.time}>{this.props.task.time}</Text>
                <TouchableOpacity style={{
                    flexDirection: 'column',
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor: chooseColorByCategory(this.props.task.category),
                    padding: 15,
                    marginStart: 20
                }}>
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
