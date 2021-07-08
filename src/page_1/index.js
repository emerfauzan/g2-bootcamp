import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Page1 extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Page 1</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Page2',{id: 2})} >
                    <Text style={{color: 'blue'}} >Ke Page 2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}