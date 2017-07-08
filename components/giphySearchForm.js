import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import $ from '@rtorr/ajax-only';

class GiphySearchForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { searchTerm: "", giphys: ""};
    this.state = { firstN: "", lastN: "", email: ""};
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
    var xhr = $.get(`http://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=5`);
    xhr.done(data => this.setState({giphys: data}));
    this.alertInput(searchTerm, this.state.giphys);
  }

  handleSubmit(e) {
    e.preventDefault();

    const searchTerm = this.state.searchTerm;
    this.fetchGiphy(searchTerm);
    this.setState({ searchTerm: ""});
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  alertInput(firstN, lastN, email) {
    alert('firstN: ' + firstN + ' lastN: ' + lastN + ' email: ' + email);
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
          onChangetext = {this.update('firstN')}/>
        <TextInput
          style={styles.input}
          placeholder = "Last Name"
          placeholderTextColor = "#4ba37b"
          autoCapitalize = "none"
          onChangetext = {this.update('lastN')}/>
        <TextInput
          style={styles.input}
          placeholder = "Email"
          placeholderTextColor = "#4ba37b"
          autoCapitalize = "none"
          onChangetext = {this.update('email')}/>
        <TouchableOpacity
          style={styles.submitButton}
          onPress = {() => this.handleSubmit}>
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
