import React, {Component} from 'react';
import BaseScreen from "../base/BaseScreen";
import {StyleSheet, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import Color from "../base/Color";
import HomeScreen from "./HomeScreen";
import PersonalScreen from "./PersonalScreen";
import KnowledgeSystemScreen from "./KnowledgeSystemScreen";

export default class MainScreen extends BaseScreen {

    pages = ["首页", "知识体系", "我的"];

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 0,
        }
    }

    render() {

        return (
            <TabNavigator style={styles.container}>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 0}
                    title={this.pages[0]}
                    selectedTitleStyle={{color: Color.primary}}
                    // renderIcon={() => <Icon name="ion-home" size={30} color="#4F8EF7"/>}
                    // renderSelectedIcon={() => <Icon name="ion-home" size={30} color="#4F8EF7"/>}
                    onPress={() => this.setState({selectedTab: 0})}>
                    <HomeScreen navigation={this.props.navigation}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 1}
                    title={this.pages[1]}
                    selectedTitleStyle={{color: Color.primary}}
                    // renderIcon={() => <Icon name="ion-home" size={30} color="#4F8EF7"/>}
                    // renderSelectedIcon={() => <Icon name="ion-home" size={30} color="#4F8EF7"/>}
                    onPress={() => this.setState({selectedTab: 1})}>
                    <KnowledgeSystemScreen navigation={this.props.navigation}/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 2}
                    title={this.pages[2]}
                    selectedTitleStyle={{color: Color.primary}}
                    // renderIcon={() => <Icon name="ion-home" size={30} color="#4F8EF7"/>}
                    // renderSelectedIcon={() => <Icon name="ion-home" size={30} color="#4F8EF7"/>}
                    onPress={() => this.setState({selectedTab: 2})}>
                    <PersonalScreen navigation={this.props.navigation}/>
                </TabNavigator.Item>

            </TabNavigator>
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
