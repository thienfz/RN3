import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';

import { connect } from 'react-redux'
import { chooseCategory } from '../actions'
import { white, categoryPersonal, categoryTodo, categoryShopping, categoryBirthday, categoryEvent } from '../styles';
import { chooseColorByCategory } from '../util';

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
        this.props.chooseCategory(item)
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
                <Text style={{ fontSize: 20, color: chooseColorByCategory(this.props.category), fontWeight: 'bold', height: 100 }}>
                {`This task belong to ${this.props.category} category `}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (store) => ({ 
    category: store.category,
})


export default connect(mapStateToProps, { chooseCategory })(ChooseCategory);