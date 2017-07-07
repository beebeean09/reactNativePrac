import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

class AlertExample extends React.Component {

  render() {

   const showAlert = () => {
      Alert.alert(
         'ALERT ALERT! HELLO.. HEHE'
      );
   };

   return (
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text style={styles.text}>Alert</Text>
      </TouchableOpacity>
   );
  }
}

const styles = StyleSheet.create ({
   button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ba37b',
    width: 100,
    height: 100,
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 50
  },
  text: {
    color: 'white',
    fontSize: 25
  }
});

export default AlertExample;
