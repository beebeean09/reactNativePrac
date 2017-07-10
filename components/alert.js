import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet, View, TextInput } from 'react-native';

class AlertExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { first: "", last: "", email: ""};
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(first, last, email) {
    alert('First Name: ' + first + ' Last Name: ' + last + ' Email: ' + email + '.');
  }

  render() {

   return (
     <View style={styles.container}>
       <Text style={styles.header}>Info Alert</Text>
       <TextInput
         style={styles.input}
         placeholder = "First Name"
         placeholderTextColor = "#4ba37b"
         autoCapitalize = "none"
         onChangeText = {(first) => this.setState({first: first})}/>
       <TextInput
         style={styles.input}
         placeholder = "Last Name"
         placeholderTextColor = "#4ba37b"
         autoCapitalize = "none"
         onChangeText = {(last) => this.setState({last: last})}/>
       <TextInput
         style={styles.input}
         placeholder = "Email"
         placeholderTextColor = "#4ba37b"
         autoCapitalize = "none"
         onChangeText = {(email) => this.setState({email: email})}/>
       <TouchableOpacity onPress = {() => this.handleAlert(this.state.first, this.state.last, this.state.email)} style = {styles.button}>
        <Text style={styles.text}>Alert With Info</Text>
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
    width: 'auto',
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
    padding: 10
  },
  input: {
    margin: 20,
    height: 40,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  header: {
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default AlertExample;
