import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Platform, TouchableHighlight, TouchableOpacity} from 'react-native';
import Color from "../base/Color";
import * as ScreenUtil from "../util/ScreenUtil";

export default class ArticleItem extends Component {

    render = () => {

        const {item} = this.props;

        return (

            <TouchableHighlight onPress={this.props.onPress}>
                <View style={[styles.container]}>
                    <Text>{item.author}</Text>
                    <Text>{item.title}</Text>
                </View>
            </TouchableHighlight>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    image: {
        height: 90,
        width: 150,
        borderRadius: (Platform.OS === 'ios') ? 5 : 5,
        resizeMode: 'stretch'
    },
    name: {
        color: Color.textKeyBlack,
        fontSize: 14,
    },
    label: {
        color: Color.primary,
        fontSize: 10,
        borderRadius: 5,
        borderColor: Color.primary,
        borderWidth: ScreenUtil.scaleSize(1),
        paddingHorizontal: 7,
        paddingVertical: 2,
    },
    content: {
        color: Color.textContentBlack,
        fontSize: 12
    }
})