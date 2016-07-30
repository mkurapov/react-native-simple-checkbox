'use strict';
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SimpleCheckBox extends Component {

    constructor(props) {

        super(props);
        this.state = {
            isChecked:props.checked,
            disabled:false
        }
    }

    checkPressed()
    {
        this.setState({isChecked: !this.state.isChecked, disabled:this.props.disableOnClick}, this.props.onToggle(!this.state.isChecked))
    }

    renderCheckState()
    {
        if (this.state.isChecked)
        {
            return (<Icon style={{backgroundColor:'transparent'}} name={this.props.iconImage} size={this.props.iconSize} color={this.props.iconColor}/>)
        }

        return null;
    }

    render() {

        const size = this.props.buttonSize;
        return (
            <TouchableOpacity activeOpacity={0.5} style={[styles.buttonContainer,{width:size,height:size, borderRadius:size/2, backgroundColor: this.props.buttonColor, opacity: (this.state.disabled ? 0.5 : 1)}]} onPress={() => !this.state.disabled ? this.checkPressed() : null}>
                <View>
                    {this.renderCheckState()}
                </View>
            </TouchableOpacity>
        );

    }
}

CCheckBox.propTypes = {
    buttonSize: React.PropTypes.number.isRequired,
    buttonColor:React.PropTypes.string.isRequired,
    iconSize: React.PropTypes.number.isRequired,
    iconColor:React.PropTypes.string.isRequired,
    iconImage:React.PropTypes.string.isRequired,
    disableOnClick:React.PropTypes.bool.isRequired,
    checked:React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired,
}

CCheckBox.defaultProps = {
    buttonSize: 25,
    buttonColor:'lightgrey',
    iconSize: 15,
    iconColor:'green',
    iconImage:'check',
    disableOnClick:false,
    checked:false,
}


var styles = StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
});


export default SimpleCheckBox;
