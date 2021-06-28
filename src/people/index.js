import React, {Component} from "react";
import {View, StyleSheet, TextInput, TouchableOpacity, Text, Alert, ToastAndroid} from "react-native";
import ListPeople from "./listPeople";

class People extends Component {
    constructor(props){
        super(props)
        this.state = {
            peoples: [
                {
                    name: 'Obi Wan',
                    status: 'Jedi'
                },
                {
                    name: 'Luke Skywalker',
                    status: 'Padawan'
                }
            ],
            name: "",
            status: ""
        }
    }

    _onAdd(){
        if(this.state.name == "" || this.state.status == ""){
            ToastAndroid.show("Data harus dilengkapi", ToastAndroid.LONG)
        } else {
            let newPeoples = this.state.peoples;

            newPeoples.push({
                name: this.state.name,
                status: this.state.status
            })

            this.setState({
                peoples: newPeoples,
                name: "",
                status: ""
            }) 
        }
        
    }

    _onDelete(index){
        let newPeoples = this.state.peoples;


        newPeoples.splice(index, 1)

        this.setState({
            peoples: newPeoples
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput} placeholder="Name" value={this.state.name} 
                        onChangeText={(text) => this.setState({name: text})} />
                    <TextInput style={styles.textInput} placeholder="Status" value={this.state.status} 
                        onChangeText={(text) => this.setState({status: text})} />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this._onAdd()}>
                            <Text style={{color: 'blue', marginRight: 10}}>Tambah</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{color: 'blue', marginRight: 10}}>Simpan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{color: 'red', marginRight: 10}}>Batal</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.peopleContainer}>
                    <ListPeople people={this.state.peoples} onDelete={(index) => this._onDelete(index)} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    peopleContainer: {
        flex: 1
    },
    textInput: {
        width: '100%'
    },
    buttonContainer: {
        flexDirection: 'row'
    }
})


export default People;