import React, { Component } from 'react';
import { 
    Text,
    View,
    FlatList
 } from 'react-native';
 import {data} from './database.json'
import ComicListItem from './ComicListItem';

 class ComicScreen extends Component {
     state = {  }
    renderItem = ({item}) => <ComicListItem/>
    keyExtractor  =(item,key) => item.id
    render() {
         return (
             <FlatList 
             data = {data}
             renderItem={this.renderItem}
             numColumns='2'
             keyExtractor={this.keyExtractor}
             />
         )
         
     }
 }
 
 export default ComicScreen;