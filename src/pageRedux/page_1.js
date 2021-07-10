import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import { increaseData, decreaseData } from '../redux/actions/exampleActions'

class Page_1 extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        AsyncStorage.removeItem('token')
    }

    onIncrease(){
        this.props.increaseData()
    }

    onDecrease(){
        this.props.decreaseData()
    }

    render(){
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={{marginVertical: 20}} onPress={() => this.props.navigation.navigate('PageRedux2')}>
                    <Text style={{color: 'blue'}}>Tambah Member</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.props.member.data}
                    style={{width: '80%'}}
                    renderItem={({item, idx}) => (
                        <View style={{borderColor: 'grey', borderBottomWidth: 0.5, width: '100%'}}>
                            <Text>{item}</Text>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    exampleReducer: state.exampleReducer,
    member: state.member
})

const actions = {
    increaseData,
    decreaseData
}

export default connect(mapStateToProps, actions)(Page_1);