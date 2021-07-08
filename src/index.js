import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";

import store from "./redux/store";
import Navigator from "./navigator";

class index extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Navigator/>
                </View>
            </Provider>
        )
    }
}

export default index;