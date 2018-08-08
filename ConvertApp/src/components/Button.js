import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import stylist from '../stylist';
import { connect } from 'react-redux'
import { setKey } from '../actions'
class Button extends Component {
    state = {}

    render() {
        return (
            <TouchableOpacity style={[stylist.button, stylist.center,
            { backgroundColor: this.props.index % 2 === 0 ? 'cyan' : 'blue', }]}
                onPress={() => {

                    this.props.lr === 'l' ?
                        this.props.setKey(this.props.data.toMeter, this.props.keyData.right)
                        : this.props.setKey(this.props.keyData.left, this.props.data.toMeter)
                }}>
                <Text style={{
                    color: this.props.lr === 'l' ? this.props.keyData.left === this.props.data.toMeter ? 'red' : 'black'
                        : this.props.keyData.right === this.props.data.toMeter ? 'red' : 'black',
                    fontSize: 18, fontWeight: 'bold',
                }}>
                    {`${this.props.data.name} (${this.props.data.shorten})`}
                </Text>
            </TouchableOpacity>
        );
    }
}
const mapstore = ({ keyData }) => ({ keyData })
export default connect(mapstore, { setKey })(Button);