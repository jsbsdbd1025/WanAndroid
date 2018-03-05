import React, {Component} from 'react';
import {View} from 'react-native';
import Color from "../base/Color";
import * as ScreenUtils from "../util/ScreenUtil";

export default class DivideLine extends Component {

    render = () => {
        return (

            <View style={{height: ScreenUtils.scaleSize(1), backgroundColor: Color.divideLine}}/>
        )
    }
}

