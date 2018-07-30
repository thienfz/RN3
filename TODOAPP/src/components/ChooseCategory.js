import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';

import { white, categoryPersonal, categoryTodo, categoryShopping, categoryBirthday, categoryEvent } from '../styles';
class ChooseCategory extends Component {
    state = {
        color: categoryTodo,
        task: "Todo",
    }
    getBGC(data) {
        switch (data) {
            case "Personal": return categoryPersonal
            case "Todo": return categoryTodo
            case "Shopping": return categoryShopping
            case "Birthday": return categoryBirthday
            case "Event": return categoryEvent
        }
    }
    changeColor(item) {
        this.setState({
            color: this.getBGC(item),
            task: item,
        })
    }
    _renderItem = ({ item }) =>
        <TouchableOpacity style={{ height: 100, width: 100, backgroundColor: this.getBGC(item), borderRadius: 10, margin: 5, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.changeColor(item)}>
            <Text style={{ color: white, fontWeight: 'bold', fontSize: 16 }}>{item}</Text>
        </TouchableOpacity>

    render() {
        return (
            <View>
                <FlatList
                    horizontal={true}
                    renderItem={({ item }) => this._renderItem({ item })}
                    data={["Todo", "Personal", "Birthday", "Event", "Shopping"]}
                    keyExtractor={(item, index) => item + index}
                />
                <Text style={{ fontSize: 20, color: this.state.color, fontWeight: 'bold', height: 100 }}>This task belong to {this.state.task} category </Text>
            </View>
        );
    }
}

export default ChooseCategory;