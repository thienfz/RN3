import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    SectionList,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'
import { white, calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';
import { connect } from 'react-redux'
class ScheduleScreen extends Component {
    state = {}
    _renderItem = ({ item, section: { id } }) => <ItemTask task={item} dayID={id} />
    _renderSectionHeader = ({ section: { date } }) => <ItemDate date={date} />
    _keyExtractor = (item, index) => item + index
    render() {
        console.log((this.props.tasks))
        return (
            <View style={st.container}>
                <CalendarStrip
                    calendarColor={calendarBackground}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    style={st.calendar} />
                <SectionList
                    renderItem={this._renderItem}
                    sections={this.props.tasks}
                    renderSectionHeader={this._renderSectionHeader}
                    keyExtractor={this._keyExtractor}
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

const mapStateToProps = ({ tasks }) => ({ tasks })

export default connect(mapStateToProps)(ScheduleScreen);