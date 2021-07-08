import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Page2 extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                <Text>Page 2</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color: 'red'}}>Kembali</Text>
                </TouchableOpacity>
            </View>
        )
    }
}