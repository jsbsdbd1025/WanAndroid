import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

export default class DeletableEditText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            focus: false,
            inputText: '',
        }
    }

    _checkImageVisible(length, focus) {
        // console.log('length:' + length + '\n'
        //     + 'focus:' + focus.toString() + '\n'
        //     + 'show:' + (length != 0 && focus)
        // );

        this.setState(() => {
            return ({
                focus: focus
            })
        });
        this.setState(() => {
            return ({
                length: length
            })
        });
        this.setState(() => {
            return ({
                show: (length != 0 && focus)
            })
        });
    }

    _focusChange(focus) {
        // console.log('focus:' + focus.toString());

        this._checkImageVisible(this.state.length, focus)
    }

    _textChange(inputText) {
        // console.log('length:' + length);

        this._checkImageVisible(inputText.length, this.state.focus)
    }

    render() {
        let v = this.state.show
            ?
            <TouchableOpacity onPress={() => {
                this.textInput.clear();
                this.props.onChangeText('');
                this._textChange('');
            }}>
                < Image
                    style={styles.icon}
                    source={require('../../src/image/ic_delete.png')}/>
            </TouchableOpacity>
            : null;

        return (
            <View style={{
                flexDirection: 'row',
                // justifyContent:'center',
                alignItems: 'center'
            }}>

                <TextInput
                    ref={input => {
                        this.textInput = input
                    }}
                    style={{
                        flex: 1,
                        height: this.props.style.height,
                    }}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={(text) => {
                        this.props.onChangeText(text);
                        this._textChange(text);
                    }}
                    placeholder={this.props.placeholder}
                    underlineColorAndroid={this.props.underlineColorAndroid}
                    onFocus={() => this._focusChange(true)}
                    onBlur={() => this._focusChange(false)}
                />

                {v}


            </View>

        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    }
});