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
import { getDateStringFromDate } from '../util';

const listRef = 'listRef'

class ScheduleScreen extends Component {
    state = {}
    _renderItem = ({ item, section: { id } }) => <ItemTask task={item} dayID={id} />
    _renderSectionHeader = ({ section: { date } }) => <ItemDate date={date} />
    _keyExtractor = (item, index) => item + index
    _onDateSelected = (date) => {
        const index = this.props.tasks.map(item => item.date).indexOf(getDateStringFromDate(date._d))
        this.scrollToSeclected(index)
    }

    scrollToSeclected = (index) => {
        this.refs.listRef.scrollToLocation({
            sectionIndex: index,
            itemIndex: 0,
            viewOffset: 20,
        })
    }
    render() {
        console.log((this.props.tasks))
        return (
            <View style={st.container}>
                <CalendarStrip
                    calendarColor={calendarBackground}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    style={st.calendar}
                    onDateSelected={this._onDateSelected} />
                <SectionList
                    renderItem={this._renderItem}
                    sections={this.props.tasks}
                    renderSectionHeader={this._renderSectionHeader}
                    keyExtractor={this._keyExtractor}
                    ref={listRef}
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