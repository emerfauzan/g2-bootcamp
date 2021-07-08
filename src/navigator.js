import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Page1 from "./page_1";
import Page2 from "./page_2";
import Swipe from "./swipe";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Navigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Swipe"
            >
                <Stack.Screen
                    name="Swipe"
                    component={Swipe}
                />
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


export default Navigator;