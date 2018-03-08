import React, {Component} from 'react';
import {Text, Platform, View, StyleSheet,} from "react-native";
import BaseScreen from "../base/BaseScreen";
import Constant from "../base/Constant";
import ButtonBar from '../widget/ButtonBar'
import * as ScreenUtil from "../util/ScreenUtil";

export default class LoginScreen extends BaseScreen {

    constructor(props) {
        super(props);

        this.state = {
            username: 'jsbsdbd1025',
            password: 'asd123'
        }

    }

    render() {

        const {navigate} = this.props.navigation;

        let EditText = Platform.select({
            ios: () => require('TextInput'),
            android: () => require('../widget/DeletableEditTextAndroid').default
        })();

        return (
            <View style={styles.container}>

                <View>

                    <View style={{
                        flexDirection: 'column',
                    }}>
                        <EditText
                            style={styles.input}
                            placeholder="请输入账号"
                            onChangeText={(text) => {
                                this.setState({username: text})
                            }}
                            underlineColorAndroid='transparent'
                            clearButtonMode='while-editing'
                        />

                        <View style={{height: 1, backgroundColor: '#f5f5f5'}}/>

                    </View>

                    <View style={{
                        flexDirection: 'column',
                    }}>
                        <EditText
                            style={styles.input}
                            placeholder="请输入密码"
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({password: text})
                            }}
                            underlineColorAndroid='transparent'
                            clearButtonMode='while-editing'
                        />

                        <View style={{height: 1, backgroundColor: '#f5f5f5'}}/>

                    </View>

                    <View
                        style={{
                            marginTop: 20
                        }}>
                        <ButtonBar
                            onPress={
                                () => {
                                    this._doLogin(this.state.username, this.state.password, navigate);
                                    console.log("click")
                                    // this._doLogin(18358587329, 'asd123', navigate);
                                }
                            }
                            title="登录"
                        />
                    </View>
                </View>

            </View>
        )
    }

    _doLogin(username, password, navigate) {
        var url = Constant.domain + '/user/login';


        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        fetch(url, {
                method: 'POST',
                headers: {},
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);
                try {

                    if (responseJson.errorCode === 0) {
                        navigate.goBack(null)
                    } else {
                        // this.toast.show(responseJson.msg);
                    }
                } catch (e) {

                    console.log(e.message);
                }


            })
            .catch((error) => {
                console.log(error);
                // this.refs.toast.show(error);
            })


    }
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        height: 140,
        width: 95
    },
    container: {
        paddingHorizontal: 30,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(34, 26, 38, 0.1)'
    },
    backimagestyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'cover',

    },
    input: {
        height: ScreenUtil.scaleSize(80)
    }
});
