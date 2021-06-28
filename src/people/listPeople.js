import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

class ListPeople extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return this.props.people.map((p, k) => (
            <View key={k} style={styles.container}>
                <Text>{p.name} - {p.status}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Icon name="edit" size={14} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onDelete(k)}>
                        <Icon name="trash" size={14} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        ))
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '10%',
        justifyContent: 'space-between'
    }
})

export default ListPeople