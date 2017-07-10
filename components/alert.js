import React from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet, View, TextInput } from 'react-native';

class AlertExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { first: "", last: "", email: ""};
    this.handleAlert = this.handleAlert.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleAlert(first, last, email) {
    alert('First Name: ' + first + ' Last Name: ' + last + ' Email: ' + email + '.');
  }

  update(field) {
    return val => this.setState({[field]: val});
  }

  clearForm() {
    this.setState({first: '', last: '', email: ''});
  }

  render() {

   return (
     <View style={styles.container}>
       <Text style={styles.header}>Info Alert</Text>
       <TextInput
         style={styles.input}
         value={this.state.first}
         placeholder = "First Name"
         placeholderTextColor = "#4ba37b"
         autoCapitalize = "none"
         onChangeText = {this.update('first')}/>
       <TextInput
         style={styles.input}
         value={this.state.last}
         placeholder = "Last Name"
         placeholderTextColor = "#4ba37b"
         autoCapitalize = "none"
         onChangeText = {this.update('last')}/>
       <TextInput
         style={styles.input}
         value={this.state.email}
         placeholder = "Email"
         placeholderTextColor = "#4ba37b"
         autoCapitalize = "none"
         onChangeText = {this.update('email')}/>
       <View style={styles.buttonContainer}>
        <TouchableOpacity onPress = {() => this.handleAlert(this.state.first, this.state.last, this.state.email)} style = {styles.button}>
          <Text style={styles.text}>Alert With Info</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.clearForm()} style = {styles.button}>
          <Text style={styles.text}>Clear Form</Text>
        </TouchableOpacity>
       </View>
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
  buttonContainer: {
    flexDirection: 'row',
    width: 300,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ba37b',
    height: 40,
    borderRadius: 4,
    margin: 10,
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
    fontSize: 16
  },
  header: {
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default AlertExample;
