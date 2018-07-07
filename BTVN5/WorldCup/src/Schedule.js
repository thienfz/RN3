import Match from "./Match";
import React, { Component } from 'react';
import { View,StyleSheet} from 'react-native';
class Schedule extends Component {
    state = {  }
    render() {
        return (
            <View style = {style.container}>
                <Match time = 'Jul 6 2018 - 21h' team1 = {France} team2 ={Uruguay}/>
                <Match time = 'Jul 7 2018 - 1h' team1 ={Brazil} team2 = {Belgium}/>
                <Match time = 'Jul 7 2018 - 21h' team1 = {Sweden} team2= {England}/>
                <Match time = 'Jul 8 2018 - 21h' team1 ={Russia} team2 = {Croatia}/>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container:{
        height:320,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
const Croatia = {
    name: 'Croatia',
    flag:{
        uri:'https://ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png'
    }
}
const Russia = {
    name: 'Russia',
    flag:{
        uri:'https://ssl.gstatic.com/onebox/media/sports/logos/5Y6kOqiOIv2C1sP9C_BWtA_48x48.png'
    }
}
const England = {
    name:'England',
    flag: {
        uri: 'https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png'
    }
}
const Sweden  ={
    name:'Sweden',
    flag:{
        uri: 'https://ssl.gstatic.com/onebox/media/sports/logos/OkFlRvRsKMWb8Hk20L9Trw_48x48.png'
    }
}
const France = {
    name: 'France',
    flag: {
        uri: 'https://ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png'
    }
}
const Uruguay = {
    name: 'Uruguay',
    flag: {
        uri: 'https://ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png'
    }
}
const Brazil = {
    name: 'Brazil',
    flag: {
        uri: 'https://ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png'
    }
}
const Belgium = {
    name: 'Belgium',
    flag: {
        uri: 'https://ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png'
    }
}
export default Schedule;