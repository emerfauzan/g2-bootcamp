import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Camera extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OpenCamera')}>
                    <Text>Open Cmaera</Text>
                </TouchableOpacity>
            </View>
        )
    }
}