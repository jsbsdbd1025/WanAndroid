import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    View,
    TouchableNativeFeedback,
    TouchableHighlight,
    Alert
} from 'react-native';
import Color from "../base/Color";

export default class DeletableEditText extends React.Component {
    render() {
        let title = this.props.title;

        return (
            <TouchableNativeFeedback
                style={this.props.style}
                background={TouchableNativeFeedback.Ripple('#FAFAFA', false)}
                onPress={this.props.onPress}>
                <View style={styles.bar}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableNativeFeedback>

        );
    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        backgroundColor: Color.primary,
        borderRadius: 50,
        width: 300,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: 'white',
        fontSize: 14
    }
});