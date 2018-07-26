import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SectionList,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'
import { white, calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import { data } from '../database.json'
class ScheduleScreen extends Component {
    state = {}
    _renderItem = ({ item }) => <ItemTask task = {item}/>
    _renderSectionHeader = ({ section: {date}}) => <ItemDate date = {date}/>
    _keyExtractor=(item, index) => item + index
    render() {
        return (
            <View style={st.container}>
                <CalendarStrip
                    calendarColor={calendarBackground}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    style={st.calendar} />
                <SectionList
                    renderItem={this._renderItem}
                    sections={data}
                    renderSectionHeader={this._renderSectionHeader}
                    keyExtractor = {this._keyExtractor}
                />

            </View>
        );
    }
}

const st = StyleSheet.create({
    container: {
        backgroundColor: white,
        flex: 1,
    },
    calendar: {
        height: 100,
        paddingTop: 10,
    }
})
export default ScheduleScreen;