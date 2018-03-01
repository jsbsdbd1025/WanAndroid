import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions, TouchableWithoutFeedback} from "react-native";
import Swiper from 'react-native-swiper';
import BaseScreen from "../base/BaseScreen";
import Constant from "../base/Constant";

// 屏幕宽度
var screenWidth = Dimensions.get('window').width;

export default class HomeScreen extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            banner: [],
        };
    }

    componentDidMount() {

        this._onRefresh();
    }

    _onRefresh() {
        this._getBanner();
    }

    render() {

        const {navigate} = this.props.navigation;

        let v = this.state.banner.length > 0 ?
            <Swiper
                height={200} horizontal={true} autoplay={true} autoplayTimeout={2}
                dot={<View style={styles.dot}/>}
                activeDot={<View style={styles.activeDot}/>}>

                {this.state.banner && this.state.banner.map((item, key) => {
                    return (
                        <TouchableWithoutFeedback key={key} style={{flex: 1}}
                                                  onPress={() => {
                                                      console.log(item.url)
                                                      navigate('NewsDetail', {title: item.title, url: item.url});
                                                  }}>

                            <Image style={styles.thumb}
                                   source={{uri: item.imagePath}}/>

                        </TouchableWithoutFeedback>
                    )
                })}

            </Swiper>
            :
            null;

        return (
            <FlatList
                keyExtractor={this._keyExtractor}
                ListHeaderComponent={v}
            />

        )
    }


    _getBanner() {
        let url = Constant.domain + '/banner/json';
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);

                try {

                    if (responseJson.errorCode === 0) {

                        let items = [];

                        for (let i in responseJson.data) {
                            let item = responseJson.data[i];
                            items[items.length] = item;
                        }

                        this.setState({
                            banner: items,
                        });

                    } else {
                        // this.toast.show(responseJson.msg);
                    }
                } catch (e) {
                    console.log(e.message);
                }


            })
            .catch((error) => {
                // this.refs.toast.show(error);
            })
    }
}
const styles = StyleSheet.create({

    thumb: {
        width: screenWidth,
        height: 200
    },
    dot: {
        backgroundColor: '#dcdcdc',
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});