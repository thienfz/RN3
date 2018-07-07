import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
 } from 'react-native';

 class ComicListItem extends Component {
     state = {  }
     render() {
         return (
             <View style={stylish.container}>
                 <Image source ={{uri: "https://api.techkids.vn/reactnative/media/comic/lokcomic1giaingochungkhoanp1/Copy_of_1.jpg"}}
                 style={stylish.ComicImage}/>
                 <Text style={stylish.ComicText}>some thing some text </Text>
            </View>
         );
     }
 }
 
 const stylish = StyleSheet.create({
    container:{
        width: 200,
        height: Dimensions.get("window").height/2,
    },
    ComicImage:{
        width: 200,
        height: 150,
    },
    ComicText:{
        color: 'cyan',
        fontFamily: 'Arial',
        fontWeight: 'bold'
    }
 })
 export default ComicListItem;