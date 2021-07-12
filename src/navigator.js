import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Page1 from "./page_1";
import Page2 from "./page_2";
import Swipe from "./swipe";
import Login from "./login";

import PageRedux1 from "./pageRedux/page_1";
import PageRedux2 from "./pageRedux/page_2";
import Storage from './storage';
import Camera from './camera';
import OpenCamera from './camera/open-camera';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class Navigator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isInitiated: false,
            routeName: "Login"
        }
    }

    componentDidMount(){
        this.checkToken()
    }

    async checkToken(){
        const token = await AsyncStorage.getItem('token')

        if(token){
            this.setState({
                routeName: 'PageRedux1'
            })
        }

        this.setState({
            isInitiated: true
        })
    }

    render(){
        if(!this.state.isInitiated) return null
        return(
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Camera"
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="PageRedux1"
                        component={PageRedux1}
                    />
                    <Stack.Screen
                        name="PageRedux2"   
                        component={PageRedux2}
                    />
                    <Stack.Screen
                        name="Camera"   
                        component={Camera}
                    />
                    <Stack.Screen
                        name="OpenCamera"   
                        component={OpenCamera}
                    />
                    {/* <Stack.Screen
                        name="Swipe"
                        component={Swipe}
                    /> */}
                    {/* <Stack.Screen 
                        name="Page1" component={Page1} 
                    />
                    <Stack.Screen name="Page2" component={Page2} />
                    <Stack.Screen 
                        name="Page3" component={Page1} 
                    /> */}
                    
                </Stack.Navigator>
            </NavigationContainer>
            
        )
    }
}


export default Navigator;