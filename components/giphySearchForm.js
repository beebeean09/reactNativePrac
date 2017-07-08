import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import $ from '@rtorr/ajax-only';

class GiphySearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { first: "", last: "", email: ""};
    this.alertInput = this.alertInput.bind(this);
  }

  alertInput(first, last, email) {
    alert('first: ' + first + ' last: ' + last + ' email: ' + email);
  }

  render() {

    return (
      <View>
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
        <TouchableOpacity
          style={styles.submitButton}
          onPress = {() => this.alertInput(this.state.first, this.state.last, this.state.email)}>
          <Text style={{color: 'white', fontSize: 15}}>Submit Term</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    margin: 20,
    height: 40,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  },
  submitButton: {
    backgroundColor: 'grey',
    borderColor: 'grey',
    borderRadius: 4,
    padding: 10,
    margin: 20,
    height: 40,
  }
});

export default GiphySearchForm;
