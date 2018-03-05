import React, {Component} from 'react';
import {View} from 'react-native';
import Color from "../base/Color";

export default class DivideBlock extends Component {

    render = () => {
        return (
            <View style={{height: 5, backgroundColor: Color.divideBlock}}/>
        )
    }
}

