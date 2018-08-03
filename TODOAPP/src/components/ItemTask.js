import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox'
import { categoryBirthday, white, gray, categoryPersonal, categoryEvent, categoryTodo, categoryShopping, calendarHighlight } from '../styles';
import { chooseColorByCategory } from '../util';
import { toggleTask, deleteTask } from '../actions';
import { connect } from 'react-redux'
class ItemTask extends Component {
    state = {
    }

    toogleTask = newValue => {
        console.log(this.props.task)
        this.props.toggleTask({
            dayID: this.props.dayID,
            timeID: this.props.task.id
        })
    }
    render() {
        console.log(this.state.taskDone)
        return (

            <View style={st.container}>
                <RoundCheckbox
                    checked={this.props.task.completed}
                    onValueChange={this.toogleTask}
                    backgroundColor={calendarHighlight} />
                <Text style={st.time}>{this.props.task.time}</Text>
                <TouchableOpacity
                    onLongPress={() => {
                        console.log("long press")
                        Alert.alert(
                            'Delete',
                            'Are you fucking sure?',
                            [
                                {
                                    text: 'OK', onPress: () => this.props.deleteTask({
                                        dayID: this.props.dayID,
                                        timeID: this.props.task.id
                                    })
                                },
                                { text: 'Cancel', style: 'cancel' },
                            ]
                        )
                    }}
                    style={{
                        flexDirection: 'column',
                        flex: 1,
                        borderRadius: 10,
                        backgroundColor: chooseColorByCategory(this.props.task.category),
                        padding: 15,
                        marginStart: 20,

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
export default connect(null, { toggleTask, deleteTask })(ItemTask);
