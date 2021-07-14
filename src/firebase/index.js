import React from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native';

export default class Firebase extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listData: [],
            nama: '',
            alamat: '',
            no_hp: ''
        }
    }

    componentDidMount(){
        this.onGetData()
    }

    onGetData(){
        firestore()
            .collection('employee')
            .onSnapshot(dataSnapshot => {
                const newList = [];

                dataSnapshot.forEach(documentSnapshot => {
                    newList.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id
                    })
                })

                this.setState({
                    listData: newList
                })
            })
    }

    onAddData(){
        firestore()
            .collection('employee')
            .add({
                nama: this.state.nama,
                alamat: this.state.alamat,
                no_hp: this.state.no_hp
            })
            .then(() => {

            })
    }

    render(){
        return (
            <View style={{flex: 1, paddingHorizontal: 15}}>
                <View style={{flex: 1}}>
                    <TextInput placeholder="Nama" style={{borderColor: 'grey', borderBottomWidth: 0.5, marginVertical: 2}} 
                        value={this.state.nama}
                        onChangeText={(nama) => this.setState({nama})}
                    />
                    <TextInput placeholder="Alamat" style={{borderColor: 'grey', borderBottomWidth: 0.5, marginVertical: 2}}
                        value={this.state.alamat}
                        onChangeText={(alamat) => this.setState({alamat})}
                    />
                    <TextInput placeholder="Nomor HP" style={{borderColor: 'grey', borderBottomWidth: 0.5, marginVertical: 2}}
                        value={this.state.no_hp}
                        onChangeText={(no_hp) => this.setState({no_hp})}
                    />

                    <TouchableOpacity style={{width: '100%', alignItems:'center', marginTop: 10}} onPress={() => this.onAddData()}>
                        <Text style={{color: 'blue'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.state.listData}
                        renderItem={({item, index}) => (
                            <View key={item.key} style={{borderColor: 'grey', borderBottomWidth: 0.5, marginVertical: 10}}>
                                <Text>{item.nama}</Text>
                                <Text>{item.alamat}</Text>
                                <Text>{item.no_hp}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}