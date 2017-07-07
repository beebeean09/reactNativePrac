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
         <Text>Alert</Text>
      </TouchableOpacity>
   );
  }
}

const styles = StyleSheet.create ({
   button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    marginTop: 100
   }
});

export default AlertExample;
