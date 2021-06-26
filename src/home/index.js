import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            list: ['Edo','Amar']
        }
    }

    _onChangeUsername(text){
        this.setState({
            username: text
        })
    }

    _onAddItem(){
        var newList = this.state.list
        newList.push(this.state.username)

        this.setState({
            list: newList
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Username" 
                        value={this.state.username}
                        onChangeText={(text) => this._onChangeUsername(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => this._onAddItem()}>
                        <Text style={styles.textButton}>TAMBAH</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={this.state.list}
                        renderItem={({item, index}) => (
                            <View key={index} style={{paddingLeft: 20, marginBottom: 10, borderColor: 'grey', borderBottomWidth: 0.5}}>
                                <Text>{item}</Text>
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    formContainer: {
        flex: 1,
        alignItems: 'center'
    },
    listContainer: {
        flex: 1
    },
    textInput: {
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        width: '80%',
        height: 50,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'cyan',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    textButton: {
        // color: 'white'
    }
})