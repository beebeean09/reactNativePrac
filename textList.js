import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class TextList extends React.Component {
  render() {
    let textInput = [];
    if (this.props.entries) {
      this.props.entries.forEach(entry => {
      textInput.push(
        <Text style={styles.entries}>{entry.name}</Text>
      );
      textInput.push(
        <Text style={styles.entries}>{entry.color}</Text>
      );
      });
    }

    return (
      {textInput}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  },
  entries: {
    fontFamily: 'Arial',
    fontSize: 16
  }
});

export default TextList;
