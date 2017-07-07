import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import TextForm from './components/textForm';
import AlertExample from './components/alert';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TextForm style={styles.textForm}/>
          <AlertExample />
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textForm: {
    flex: 1,
    margin: 50
  }
});
