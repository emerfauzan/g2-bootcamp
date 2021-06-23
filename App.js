import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>TES</Text>
        <TextInput placeholder="Tes" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  }
})

export default App;