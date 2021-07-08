import React, {Component} from "react";
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, TextInput, Modal } from "react-native";

class Networking2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            nama: '',
            nip: '',
            alamat: '',
            jabatan: '',
            masaKerja: '',
            detail: {},
            modalShow: false
        }
    }

    componentDidMount(){
        this._getData()
    }

    _getData(){
        return fetch('http://207.148.121.63/api/employee?owner=8', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log("Data API == ", responseJson)
            this.setState({
                data: responseJson.data
            })
        })
        .catch((error) => {
            console.log("Error get data API == ", error)
        })
    }

    _getDataDetail(id){
        return fetch('http://207.148.121.63/api/employee/'+id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log("Data API Detail == ", responseJson)
            this.setState({
                detail: responseJson.data,
                modalShow: true
            })
        })
        .catch((error) => {
            console.log("Error get data API == ", error)
        })
    }

    _submitData(){
        return fetch('http://207.148.121.63/api/employee', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nama: this.state.nama,
                nip: this.state.nip,
                alamat: this.state.alamat,
                jabatan: this.state.jabatan,
                masa_kerja: this.state.masaKerja,
                owner: 8
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log("Response API == ", responseJson)
            this._getData()
        })
        .catch((error) => {
            console.log("Error get data API == ", error)
        })
    }

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', paddingTop: 10}}>
                <TextInput 
                    placeholder="Nama" 
                    style={styles.textInput} 
                    value={this.state.nama} 
                    onChangeText={(text) => this.setState({nama: text})} 
                />
                <TextInput 
                    placeholder="NIP" 
                    style={styles.textInput} 
                    value={this.state.nip} 
                    onChangeText={(text) => this.setState({nip: text})} 
                />
                <TextInput 
                    placeholder="Alamat" 
                    style={styles.textInput} 
                    value={this.state.alamat}
                    onChangeText={(text) => this.setState({alamat: text})} 
                />
                <TextInput 
                    placeholder="Jabatan" 
                    style={styles.textInput} 
                    value={this.state.jabatan}
                    onChangeText={(text) => this.setState({jabatan: text})}
                />
                <TextInput placeholder="Masa Kerja" style={styles.textInput} keyboardType="number-pad" 
                    value={this.state.masaKerja}
                    onChangeText={(text) => this.setState({masaKerja: text})}
                />

                <TouchableOpacity onPress={() => this._submitData()} style={{marginTop: 20, backgroundColor: '#FF5647', paddingHorizontal: 10, paddingVertical: 10}}>
                    <Text style={{color: 'white'}}>Simpan</Text>
                </TouchableOpacity>

                <View style={{flex: 1, width: '100%', paddingHorizontal: 20}}>
                    
                    <FlatList
                        data={this.state.data}
                        renderItem={({item, index}) => (
                            <TouchableOpacity style={{marginTop: 10, borderColor: 'grey', borderBottomWidth: 0.5, paddingVertical: 5}} 
                                onPress={() => this._getDataDetail(item.id)}>        
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.nama}</Text>
                                <Text style={{color: 'grey'}}>{item.jabatan}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalShow}
                >
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'rgba(1,1,1,0.8)'}}>
                        <View style={{backgroundColor: 'white', height: 300, width: 250, padding: 10}}>
                            <Text>Nama: {this.state.detail.nama}</Text>
                            <Text>NIP: {this.state.detail.nip}</Text>
                            <Text>Alamat: {this.state.detail.alamat}</Text>
                            <Text>Jabatan: {this.state.detail.jabatan}</Text>
                            <Text>Masa Kerja: {this.state.detail.masa_kerja} Bulan</Text>

                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                                <TouchableOpacity onPress={() => this.setState({modalShow: false})}>
                                    <Text style={{color: 'red'}}>Tutup</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        borderColor: 'grey',
        borderBottomWidth: 0.5
    }
})

export default Networking2;