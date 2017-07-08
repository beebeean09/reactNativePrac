import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import $ from '@rtorr/ajax-only';

class GiphySearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "", giphys: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchGiphy(searchTerm) {
     $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`
        }).then(response => {
        if (response.status !== 200){
          console.log('fetchLystList. Status code: ' + response.status);
          return;
        }
        response.json().then(data => {
          this.setState({giphys: data});
        });
        //  this.setState({giphys: giphy});
      });

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

  alertInput(searchTerm, giphys) {
    alert('search term: ' + searchTerm + ' giphys: ' + giphys);
  }

  render() {
    const giphyImage = this.state.giphy !== "" ? 'None' : this.state.giphy;

    return (
      <View>
        <Text style={{color: 'black'}}>Text:{giphyImage}</Text>
        <TextInput
          style={styles.input}
          placeholder = "Search Term"
          placeholderTextColor = "#4ba37b"
          autoCapitalize = "none"
          onChangetext = {this.update('searchTerm')}/>
        <TouchableOpacity
          style={styles.submitbutton}
          onPress = {() => this.alertInput(this.state.searchTerm, this.state.giphys)}>
          <Text style={{color: '#4ba37b'}}>Submit Term</Text>
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
    borderColor: 'black',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  }
});

export default GiphySearchForm;
