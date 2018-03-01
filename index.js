import {AppRegistry} from 'react-native';
import {StackNavigator} from "react-navigation";
import MainScreen from "./app/container/MainScreen";
import NewsDetailScreen from "./app/container/NewsDetailScreen";

export const Launcher = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            headerTitle: "玩Android",
        }
    },

    NewsDetail: {
        screen: NewsDetailScreen,
    }
});

AppRegistry.registerComponent('WanAndroid', () => Launcher);
