import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import { ToastAndroid } from 'react-native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text as TextElement } from 'react-native-elements';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            isPasswordShow: false,
            email: 'fauzan@app.com',
            password: 'password'
        }
    }

    onLogin(){
        return fetch('http://207.148.121.63/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then((response) => response.json())
        .then(async (responseJson) => {
            console.log("Data API == ", responseJson.data.access_token)
            await AsyncStorage.setItem("token", responseJson.data.access_token)
            this.props.navigation.reset({
                index:0,
                routes: [{name: 'PageRedux1'}]
            })
            
        })
        .catch((error) => {
            console.log(error)
            ToastAndroid.show("Error Login ", ToastAndroid.LONG);
        })
    }


    render(){
        return(
        <View style={styles.container}>
                <Text style={styles.title}>Log In</Text> 
                <TextInput style={styles.textInput} placeholder="Username" value={this.state.email}
                    onChangeText={(email) => {
                        this.setState({email})
                    }}
                />
                <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={!this.state.isPasswordShow} 
                    value={this.state.password}
                    onChangeText={(password) => {
                        this.setState({password})
                    }} />

                {
                    this.state.isPasswordShow && (
                        <TouchableOpacity onPress={() => this.setState({isPasswordShow: false})}>
                            <Text>Sembunyikan</Text>
                        </TouchableOpacity>
                    )
                }

                {
                    !this.state.isPasswordShow && (
                        <TouchableOpacity onPress={() => this.setState({isPasswordShow: true})}>
                            <Text>Tampilkan</Text>
                        </TouchableOpacity>
                    )
                }

                

                


                <TouchableOpacity style={styles.button} onPress={() => this.onLogin()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.daftarDisiniContainer}>
                    <Text>Belum memiliki akun? </Text>
                    <TouchableOpacity>
                        <Text style={styles.daftarDisiniText}>Daftar disini</Text>
                    </TouchableOpacity>
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 20
    },
    textInput: {
        width: '80%',
        height: 50,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginVertical: 10

    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#EB7D08',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    buttonText: {
        color: '#FFFFFF'
    },
    daftarDisiniContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       marginTop: 20
    },
    daftarDisiniText: {
        color: '#EB7D08'
    }
})

export default Home;