import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image
} from 'react-native';
import axios from 'axios'
import HeroesDetails from './HeroesDetails';
class AccountScene extends Component {
    state = {
        data: {}
    }

    componentWillMount() {
        axios.get(`https://api.opendota.com/api/players/${this.props.navigation.state.params.ID}`)
            .then(res => this.setState({ data = res.data }))
    }

    render() {
        return (
            <View>
                <View style={st.playerDetail}>
                    <Image
                        source={{ uri: this.state.data.profile.avatarfull }}
                        style={st.avatar} />
                    <Text style={st.name}> {this.state.data.profile.personaname} </Text>
                </View>
                <HeroesDetails ID={this.state.data.profile.account_id} />
            </View>

        );
    }
}

const st = StyleSheet.create({
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },
    avatar: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 50
    },
    playerDetail: {
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'cyan',
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})
export default AccountScene;