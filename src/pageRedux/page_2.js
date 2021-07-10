import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {addMember} from '../redux/actions/memberActions'

class PageRedux2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nama: ''
        }
    }

    componentDidUpdate(){
        console.log("Data Member == ", this.props.member.data)
    }

    onAddMember(){
        this.props.addMember(this.state.nama)
        this.props.navigation.goBack()
    }



    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TextInput  
                    style={{width: '80%', borderColor: 'grey', borderBottomWidth: 0.5, marginVertical: 15}}
                    placeholder="Masukan Nama"
                    value={this.state.nama}
                    onChangeText={(nama) => this.setState({nama})}
                />

                <TouchableOpacity onPress={() => this.onAddMember()}>
                    <Text style={{color: 'green'}}>Tambah</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    exampleReducer: state.exampleReducer,
    member: state.member
})

const actions = {
    addMember
}

export default connect(mapStateToProps, actions)(PageRedux2)