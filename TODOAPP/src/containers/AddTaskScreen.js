import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {getDayOfWeek} from '../util'
import CalendarStrip from 'react-native-calendar-strip'
import { white, calendarBackground, calendarHighlight, gray, categoryTodo } from '../styles'
import ChooseCategory from '../components/ChooseCategory';
import DateTimePicker from 'react-native-modal-datetime-picker'
import { addTask } from '../actions';
import { connect } from "react-redux";

class AddTaskScreen extends Component {
    state = {
        selected: new Date(),
        isTimerVisible: false,
        color: categoryTodo,
        currentTask: 'Todo',
        pickedTime: new Date().getHours().toString() + ":" + new Date().getMinutes().toString()
    }
    componentDidMount(){
        this.props.navigation.setParams({addTask: this.handleAddTask})
    }
    handleAddTask(){
        this.props.addTask({
            id: 123,
            date: 'June 23 2018',
            task: {
                id: 1234,
                category: "Personal",
                content: "Go to New York",
                time: "09:00"
            }
        })
        this.props.navigation.navigate('Schedule')
    }
    
    clicked = (color, category) =>
        this.setState({
            color: color,
            currentTask: category,
        })

    confirm = time => this.setState({
        pickedTime: time.getHours().toString() + ":" + time.getMinutes().toString(),
        isTimerVisible: false,
    })
    render() {
        return (
            <View style={st.container}>
                <CalendarStrip
                    setSelectedDate={require('moment')}
                    onDateSelected={(date) => this.setState({
                        selected: date._d
                    })}
                    calendarColor={calendarBackground}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    style={st.calendar} />
                <View style={st.dateviewer}>
                    <Text style={st.dayOfWeek}>{getDayOfWeek(this.state.selected.getDay())}</Text>
                    <Text style={st.date}>{this.state.selected.toDateString().substring(3, )}</Text>
                </View>
                <Text style={st.title}> Content </Text>
                <TextInput style={st.textinput}> </TextInput>
                <Text style={st.title}> Time </Text>
                <TouchableOpacity style={{ height: 20, width: 100 }}
                    onPress={() => this.setState({ isTimerVisible: true })}>
                    <Text style={{ fontSize: 20, color: 'blue', marginLeft: 20, fontWeight: 'bold' }}>{this.state.pickedTime} </Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isTimerVisible}
                    onConfirm={(time) => this.confirm(time)}
                    onCancel={() => this.setState({ isTimerVisible: false })}
                    mode={'time'}
                />
                <Text style={st.title}> Category </Text>
                <ChooseCategory />
            </View>
        );
    }
}
const st = StyleSheet.create({

    textinput: {
        borderRadius: 10,
        margin: 20,
        height: 50,
        backgroundColor: gray
    },
    title: {
        width: 120,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        color: gray,
    },
    container: {
        backgroundColor: white,
        flex: 1,
    },
    dateviewer: {
        flexDirection: 'row',
        margin: 15,
        alignItems: 'flex-end',
    },
    calendar: {
        height: 100,
        paddingTop: 10,
    },
    dayOfWeek: {
        width: 120,
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: gray
    }
})

export default connect(null,{addTask})(AddTaskScreen);