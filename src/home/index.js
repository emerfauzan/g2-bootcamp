import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text as TextElement } from 'react-native-elements';

class Home extends Component {
  render(){
    return(
      <View style={styles.container}>
          <Button title="Button"  />
            <Text style={styles.title}>Log In</Text> 
            <TextInput style={styles.textInput} placeholder="Username" />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button}>
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