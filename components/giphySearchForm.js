import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import $ from '@rtorr/ajax-only';

class GiphySearchForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { searchTerm: "", giphys: ""};
    this.state = { first: "", last: "", email: "", searchTerm: "", giphy: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.alertInput = this.alertInput.bind(this);
  }

  fetchGiphy(searchTerm) {
    //  $.ajax({
    //     method: 'GET',
    //     url: `http://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=5`
    //     }).then(response => {
    //     if (response.status !== 200){
    //       console.log('fetchLystList. Status code: ' + response.status);
    //       return;
    //     }
    //     response.json().then(data => {
    //       this.setState({giphys: data});
    //     });
    //     //  this.setState({giphys: giphy});
    //   });
    fetch(`http://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=5`)
    .then(res => res.json())
    .then(res => this.updateList(res));
  }

  updateList(list) {
    this.setState({giphy: list});
    alert('update: ' + this.state.giphy.data);
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    alert('searchterm:' + searchTerm);
    this.fetchGiphy(searchTerm);
    this.setState({ searchTerm: ""});
  }

  alertInput(first, last, email) {
    alert('first: ' + first + ' last: ' + last + ' email: ' + email);
  }

  render() {
    const giphyImage = this.state.giphy !== "" ? 'None' : this.state.giphy;

    // <Text style={{color: 'black'}}>Text:{giphyImage}</Text>
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
        <TextInput
          style={styles.input}
          placeholder = "SearchTerm"
          placeholderTextColor = "#4ba37b"
          autoCapitalize = "none"
          onChangeText = {(searchTerm) => this.setState({searchTerm: searchTerm})}/>
        <TouchableOpacity
          style={styles.submitButton}
          onPress = {() => this.fetchGiphy(this.state.searchTerm)}>
          <Text style={{color: 'white', fontSize: 15}}>Submit Term</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// onPress = {() => this.alertInput(this.state.first, this.state.last, this.state.email)}>

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
