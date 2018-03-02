import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions, TouchableWithoutFeedback, Text} from "react-native";
import Swiper from 'react-native-swiper';
import BaseScreen from "../base/BaseScreen";
import Constant from "../base/Constant";
import PageUtil from "../util/PageUtil";
import ArticleItem from "../conponent/ArticleItem";

// 屏幕宽度
var screenWidth = Dimensions.get('window').width;

export default class HomeScreen extends BaseScreen {

    pageUtil = new PageUtil();

    constructor(props) {
        super(props);
        this.state = {
            banner: [],
            datas: []
        };
    }

    componentDidMount() {

        this._onRefresh();
    }

    _onRefresh() {

        if (!this.pageUtil.isLoading()) {
            this.pageUtil = new PageUtil();
            this.pageUtil.setRefreshing(true);
            this._getBanner();
            this._loadMore()
        }
    }

    _loadMore() {

        console.log('加载数据');
        console.log('isLoading:' + this.pageUtil.isLoading() + "  hasMore:" + this.pageUtil.hasMore());
        if (!this.pageUtil.isLoading() && this.pageUtil.hasMore()) {

            this.pageUtil.setLoading(true);

            console.log('可以加载 加载第' + this.pageUtil.nextPage() + '页数据')
            this._getArticle(this.pageUtil.nextPage())
        } else {
            console.log('不能加载')
        }

    }

    _renderItem(data, navigate) {
        console.log(data)
        return (
            <ArticleItem item={data} onPress={() => {
                console.log(data.url)
                navigate('NewsDetail', {title: data.title, url: data.link});
            }}/>
        )
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
                ref={(list) => {
                    this.list = list
                }}
                ListHeaderComponent={v}
                refreshing={this.pageUtil.isRefreshing()}
                onRefresh={() => this._onRefresh()}
                data={this.state.datas}
                renderItem={({item}) => this._renderItem(item, navigate)}
                onEndReachedThreshold={0.4}
                onEndReached={() => this._loadMore()}
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

    //分页从0开始，做特殊处理
    _getArticle(pageNum) {

        let url = Constant.domain + '/article/list/' + (pageNum - 1) + '/json';
        console.log(url)

        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {

                let datas = this.pageUtil.isRefreshing() ? [] : this.state.datas;
                console.log(responseJson);

                try {

                    if (responseJson.errorCode === 0) {

                        let pageList = responseJson.data;

                        this.pageUtil.setPage(new PageUtil(pageList.curPage - 1, pageList.pageCount - 1));

                        for (let i in pageList.datas) {
                            let item = pageList.datas[i];
                            datas.push(item);
                        }
                        console.log(datas);

                        this.setState({
                            datas: datas,
                        });

                    } else {
                        // this.toast.show(responseJson.msg);
                    }
                } catch (e) {
                    console.log(e.message);
                } finally {
                    // console.log('加载完成，重置状态');

                    this.pageUtil.loadOver();

                }

            })
            .catch((error) => {
                this.pageUtil.loadOver();
                // this.refs.toast.show(error);
            })
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
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