import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import $ from '@rtorr/ajax-only';

class GiphySearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm: "", giphy: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchGiphy(searchTerm) {
    fetch(`http://api.giphy.com/v1/stickers/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=5`)
    .then(res => res.json())
    .then(res => this.updateList(res));
  }

  giphyParse(list) {
    let giphyImage;
    giphyImage = list.map(giphy => (
      giphy.images.original.url
    ));
    return giphyImage;
  }

  updateList(list) {
    this.setState({giphy: this.giphyParse(list.data)});
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.searchTerm;
    alert('searchterm:' + searchTerm);
    this.fetchGiphy(searchTerm);
    this.setState({ searchTerm: ""});
  }

  render() {
    let giphyImage;

    if (this.state.giphy) {
      giphyImage = this.state.giphy.map((idx, el) => (
        <Image key={el} source={{uri: idx}} style={styles.giphys} />
      ));
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Giphy Search</Text>
        <TextInput
          style={styles.input}
          placeholder = "Enter Search Term Here"
          placeholderTextColor = "#4ba37b"
          autoCapitalize = "none"
          onChangeText = {(searchTerm) => this.setState({searchTerm: searchTerm})}/>
        <TouchableOpacity
          style={styles.submitButton}
          onPress = {() => this.fetchGiphy(this.state.searchTerm)}>
          <Text style={styles.text}>Submit Term</Text>
        </TouchableOpacity>
        {giphyImage}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 25
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
    height: 40
  },
  header: {
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  giphys: {
    width: 200,
    height: 200,
    margin: 10
  }
});

export default GiphySearchForm;
