import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Platform, TouchableHighlight, TouchableOpacity} from 'react-native';
import Color from "../base/Color";
import * as ScreenUtil from "../util/ScreenUtil";

export default class ArticleItem extends Component {

    render = () => {

        const {item} = this.props;

        let image = item.envelopePic !== "" ? <Image
                style={styles.img}
                source={{uri: item.envelopePic}}
            />
            :
            null;

        return (

            <TouchableHighlight onPress={this.props.onPress}>
                <View style={[styles.container]}>
                    <View style={{flexDirection: 'row'}}>

                        <Text style={[styles.name, {flex: 1}]}>{item.author}</Text>

                        <Text style={styles.label}>{item.chapterName}</Text>

                    </View>

                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{flex: 1, marginRight: 5}}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={[styles.content, {marginTop: 5}]}>{item.desc}</Text>
                        </View>

                        {image}
                    </View>
                </View>
            </TouchableHighlight>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    name: {
        color: Color.textContentBlack,
        fontSize: 12,
    },
    label: {
        color: Color.textHintBlack,
        fontSize: 12,
    },
    title: {
        color: Color.textKeyBlack,
        fontSize: 14
    },
    content: {
        color: Color.textContentBlack,
        fontSize: 12
    },
    img: {
        height: 50,
        width: 50,
        resizeMode: 'stretch'
    },
})