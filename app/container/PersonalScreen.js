import React, {Component} from 'react';
import {Image, Text, View, Platform, Dimensions, StyleSheet, TouchableWithoutFeedback} from "react-native";
import BaseScreen from "../base/BaseScreen";
import DivideBlock from "../widget/DivideBlock";

// 屏幕宽度
var screenWidth = Dimensions.get('window').width;

export default class HomeScreen extends BaseScreen {

    avatar = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520526546400&di=81dc345f91ea52460ba9b' +
        'a2446853474&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2066911629%2C2291367316%26fm%3D214%26gp%3D0.jpg'

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigate('Login');
                        }}>
                        <Image
                            style={[styles.avatar,]}
                            source={{uri: this.avatar}}
                        />

                    </TouchableWithoutFeedback>
                    <View style={{justifyContent: 'center', marginLeft: 10}}>
                        <Text>点击头像登录</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    header: {
        width: screenWidth,
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        marginTop: 10
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: (Platform.OS === 'ios') ? 25 : 50,
        resizeMode: 'stretch'
    },

});