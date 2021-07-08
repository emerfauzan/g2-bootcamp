import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

export default class Swipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    key: 1,
                    name: 'Aldi'
                },
                {
                    key: 2,
                    name: 'Nisa'
                },
                {
                    key: 3,
                    name: 'Dhea'
                }
            ]
        }
    }

    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <SwipeListView
                    style={{width: '100%'}}
                    data={this.state.data}
                    renderItem={(data, rowMap) => (
                        <View style={styles.rowFront}>
                            <Text>{data.item.name}</Text>
                        </View>
                    )}
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={styles.rowBack}>
                            <Text>Left</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight: 5}}>Right</Text>
                                <Text>Right 2</Text>
                            </View>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-85}
                />

                <View style={{marginTop: 5}} style={{width: '80%'}}>
                    <SwipeRow leftOpenValue={75} rightOpenValue={-75} style={{width: '100%'}}>
                        <View style={styles.rowBack}>
                            <Text>Left</Text>
                            <Text>Right</Text>
                        </View>
                        <View style={styles.rowFront}>
                            <Text>Ini Swipe Row</Text>
                        </View>
                    </SwipeRow>

                    <SwipeRow leftOpenValue={75} rightOpenValue={-75} style={{width: '100%'}}>
                        <View style={styles.rowBack}>
                            <Text>Left</Text>
                            <Text>Right</Text>
                        </View>
                        <View style={styles.rowFront}>
                            <Text>Ini Swipe Row 2</Text>
                        </View>
                    </SwipeRow>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'grey',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15
    }
})