import React, {Component} from 'react';
import Color from "./Color";

export default class BaseScreen<Props, State> extends Component<Props, State> {

    static navigationOptions = {
        headerTintColor: 'white',
        headerStyle: {backgroundColor: Color.primary, height: 44},
        headerTitleStyle: {color: 'white', fontSize: 18, fontWeight: 'normal'},
    }

    _keyExtractor = (item, index) => index;

    constructor(props) {
        super(props);
        // BackHandler.addEventListener('hardwareBackPress', () => {
        //     this.props.nav.pop()
        //     return true;
        // });
    }


}

