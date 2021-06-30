import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            nama: [],
            jumlah: 0,
            isCounted: false,
            angka: 0,
            notes: ""
        }
    }

    componentDidMount(){
        const nama = ["Adi", "Umar", "Leo"]

        
    }

    componentDidUpdate(){
        
        
    }

    


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Before Update ", prevState)

        if(!this.state.isCounted){
            if(prevState.angka > this.state.angka){
                this.setState({
                    notes: "State baru lebih kecil",
                    isCounted: true
                })
            } else if(prevState.angka < this.state.angka){
                this.setState({
                    notes: "State baru lebih besar",
                    isCounted: true
                })
            } else {
                this.setState({
                    notes: "State baru sama dengan",
                    isCounted: true
                })
            }
        }

        

        return 0;
    }

    _addName(){
        var newNama = this.state.nama;

        newNama.push("Baru");
        this.setState({
            nama : newNama,
            isCounted: false
        })
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                <TextInput style={{width: '80%'}} placeholder="Masukkan Angka" onChangeText={(text) => this.setState({angka: text, isCounted: false})} ></TextInput>

                <Text>{this.state.notes}</Text>
            </View>
        )
    }

    componentWillUnmount(){
        
    }
}

export default Lifecycle;