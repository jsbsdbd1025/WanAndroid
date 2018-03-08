import {AppRegistry} from 'react-native';
import {StackNavigator} from "react-navigation";
import MainScreen from "./app/container/MainScreen";
import NewsDetailScreen from "./app/container/NewsDetailScreen";
import LoginScreen from "./app/container/LoginScreen";

export const Launcher = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            headerTitle: "玩Android",
        }
    },
    Login: {
        screen: LoginScreen
    },
    NewsDetail: {
        screen: NewsDetailScreen,
    }
});

AppRegistry.registerComponent('WanAndroid', () => Launcher);
