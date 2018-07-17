import React, { Component } from 'react';
import {
    FlatList,
    Image
} from 'react-native';
class Detail extends Component {
    state = {}
    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({ item }) => <Image
                    style={{ height: 200 }}
                    source={{ uri: item }}
                />}
            />
        );
    }
}

export default Detail;