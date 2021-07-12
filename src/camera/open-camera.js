import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class OpenCamera extends React.Component {
    constructor(props){
        super(props)
    }

    async onCapture(){
        if(this.camera){
            const options = { quality: 0.5, base64: true }
            const data = await this.camera.takePictureAsync(options);
            console.log("Data Camera == ", data)
        }
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}

                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingVertical: 20
                    }}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                      }}
                >
                    <TouchableOpacity 
                        style={{width: 50, height: 50, borderRadius: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => this.onCapture()}    
                    >
                        <Icon name="camera" size={18} />
                    </TouchableOpacity>
                </RNCamera>
            </View>
        )
    }
}