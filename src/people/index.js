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

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput} placeholder="Name" value={this.state.name} 
                        onChangeText={(text) => this.setState({name: text})} />
                    <TextInput style={styles.textInput} placeholder="Status" value={this.state.status} 
                        onChangeText={(text) => this.setState({status: text})} />
                    <TouchableOpacity onPress={() => this._onAdd()}>
                        <Text style={{color: 'blue'}}>Tambah</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.peopleContainer}>
                    <ListPeople people={this.state.peoples} />
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
        flex: 1
    },
    peopleContainer: {
        flex: 1
    },
    textInput: {
        width: '100%'
    }
})


export default People;