import React, {Component} from "react";
import {View, Text} from "react-native";

class ListPeople extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return this.props.people.map((p, k) => (
            <Text key={k}>{p.name} - {p.status}</Text>
        ))
    }
}

export default ListPeople