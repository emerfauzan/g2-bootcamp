import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){
        // this.removeData()
        this.storeData()
    }

    async storeData(){
        try {
            await AsyncStorage.setItem('nama', 'Andi')
            await AsyncStorage.setItem('alamat', 'Jakarta')
            await AsyncStorage.setItem('pekerjaan', 'Swasta')
            this.getData()
        } catch(e){
            console.log("error ", e)
        }
    }

    async getData(){
        try{
            const nama = await AsyncStorage.getItem('nama')
            const alamat = await AsyncStorage.getItem('alamat')
            const pekerjaan = await AsyncStorage.getItem('pekerjaan')
            console.log(nama)
            console.log(alamat)
            console.log(pekerjaan)
        } catch (e){
            console.log("error ", e)
        }
    }

    async removeNama(){
        try {
            await AsyncStorage.removeItem('nama');
            this.getData()
        } catch(e){
            console.log("error ", e)
        }
    }

    async removeData(){
        try{
            await AsyncStorage.removeItem('isLogin')
        } catch (e){
            console.log("error ", e)
        }
    }
    render(){
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.removeNama()}>
                    <Text>
                        Hapus Nama
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}