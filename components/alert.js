import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

class AlertExample extends React.Component {

  render() {

   const showAlert = () => {
      Alert.alert(
         'ALERT ALERT! HELLO.. HEHE'
      );
   };

   return (
     <View style={styles.container}>
       <TouchableOpacity onPress = {showAlert} style = {styles.button}>
       <Text style={styles.text}>Alert</Text>
       </TouchableOpacity>
     </View>
   );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
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
