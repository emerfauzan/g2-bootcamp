import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            nama: [],
            jumlah: 0,
            isCounted: false
        }
    }

    componentDidMount(){
        const nama = ["Adi", "Umar", "Leo"]

        this.setState({
            nama: nama,
            isCounted: false
        })
    }

    componentDidUpdate(){
        if(!this.state.isCounted){
            this.setState({
                jumlah: this.state.nama.length,
                isCounted: true
            })
        }
        
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
                <TouchableOpacity onPress={() => this._addName()}>
                    <Text style={{color: 'blue'}} >Tambah</Text>
                </TouchableOpacity>

                {
                    this.state.nama.map((item) => (
                        <Text style={{fontSize: 20}} >{item}</Text>
                    ))
                }

                <Text style={{fontSize: 24, marginTop: 30}}>
                    {this.state.jumlah}
                </Text>
            </View>
        )
    }
}

export default Lifecycle;