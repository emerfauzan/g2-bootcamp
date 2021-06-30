import React, {Component} from "react";
import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";

class Networking extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this._getData();
    }

    _getData(){
        return fetch('https://omdbapi.com/?s=Superman&page=1&apikey=bed4a3d3', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
        .then((responseJson) => {
            console.log("Data API == ", responseJson)
            this.setState({
                list: responseJson.Search
            })
        })
        .catch((error) => {
            console.log("Error get data API == ", error)
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity 
                style={{
                    flexDirection: 'row', 
                    marginVertical: 10,
                    padding: 10,
                    borderRadius: 10,
                    borderColor: 'grey',
                    borderWidth: 0.5,
                    shadowColor: 'black',
                    shadowOpacity: 0.26,
                    shadowOffset: { width: 0, height: 2},
                    shadowRadius: 10,
                    elevation: 3,
                    backgroundColor: 'white'
                }}
            >
                {/* <View> */}
                    <Image source={{uri: item.Poster}} resizeMode='contain' style={{width: 50, height: 50}} />
                {/* </View> */}
                <View>
                    <Text style={{fontWeight: '700'}}>{item.Title}</Text>
                    <Text style={{fontSize: 12, color: 'grey'}}>{item.Year}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.list}
                    contentContainerStyle={{paddingHorizontal: 10}}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

export default Networking;