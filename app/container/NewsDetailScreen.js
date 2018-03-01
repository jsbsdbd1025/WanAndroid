import React, {Component} from 'react';
import {Text, View, WebView, StyleSheet, Dimensions} from 'react-native';
import BaseScreen from "../base/BaseScreen";
import Constant from "../base/Constant";

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');
export default class NewsDetailScreen extends BaseScreen {


    constructor(props) {
        super(props);
    }


    render() {

        const {params} = this.props.navigation.state;

        console.log(params.url)
        return (
            <View style={styles.container}>
                <WebView
                    style={{height: deviceHeight, width: deviceWidth}}
                    source={{uri: params.url}}
                    startInLoadingState={true}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },

});