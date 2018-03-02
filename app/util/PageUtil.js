import React from 'react';
import {Text} from "react-native";

export default class PageUtil {

    _pageNum;
    _pages;
    _refreshing;
    _loading;

    constructor(pageNum, pages) {

        this._pageNum = pageNum ? pageNum : 0;
        this._pages = pages ? pages : 1;
        this._refreshing = false;
        this._loading = false;
    }

    setPage(page) {
        this._pageNum = page._pageNum;
        this._pages = page._pages;
        this._refreshing = page.isRefreshing();
        this._loading = page.isLoading();
    }

    hasMore() {
        return this._pageNum < this._pages;
    }

    nextPage() {
        return this._pageNum + 1;
    }

    setLoading(loading) {
        this._loading = loading;
    }

    setRefreshing(refreshing) {
        this._refreshing = refreshing;
    }

    isRefreshing() {
        return this._refreshing;
    }

    isLoading() {
        return this._loading;
    }

    loadOver() {
        this._refreshing = false;
        this._loading = false;
    }

    loadFooter() {
        return null;

        /*if (this._loading && !this._refreshing) {
            return <Text style={{flex: 1, alignSelf: 'center'}}>正在加载中</Text>;
        } else if (!this.hasMore()) {
            return <Text style={{flex: 1, alignSelf: 'center'}}>已经到底啦</Text>;
        } else {
            return null;
        }*/
    }
}