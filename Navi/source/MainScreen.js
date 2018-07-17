import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import { database } from './database.json'
import Item from './Item'
class MainScreen extends Component {
    state = {}
    _renderItem = ({ item }) =>
        <Item data = {item}/>
    _keyExtractor = (item, index) => item.id.toString()
    
    render() {
        return (
            <View style ={styles.FL}>
            <FlatList 
                data={database}
                renderItem={this._renderItem}
                numColumns ={2}
                keyExtractor = {this._keyExtractor}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    FL:{
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
export default MainScreen;