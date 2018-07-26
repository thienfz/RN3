import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import axios from 'axios'
import AuthorDetailsScreen from './AuthorDetailsScreen';
class FilmScreen extends Component {
    state = {
        h: Dimensions.get('window').height,
        w: Dimensions.get('window').width,
        data: [],
        loading: false,
    }
    componentWillMount() {
        this.setState({
            loading: true,
        })
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then((res) => {
                this.setState({
                    data: res.data,
                    loading: false
                })
            })
    }
    _renderItem = ({ item }) =>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FilmDetails', { data:item })}
            style={{ height: 50, width: this.state.w, backgroundColor: 'rgba(155,155,155,0.7)', borderRadius: 10, justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Times New Roman', fontSize: 20 }}>   {item.title}</Text>
        </TouchableOpacity>

    render() {
        return (
            <ImageBackground
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                source={{ uri: `https://picsum.photos/${this.state.w}/${this.state.h}?random&&blur` }}>

                {(this.state.loading === false ?
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => this._renderItem({ item })}
                        keyExtractor={(item) => item.id} />
                    : <ActivityIndicator />)}
            </ImageBackground>
        );
    }
}

export default FilmScreen;