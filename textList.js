import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class TextList extends React.Component {
  render() {
    let textInput;
    if (this.props.entries) {
      textInput = this.props.entries.map(entry => {
      <Text style={styles.entries}></Text>;
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.entries}>Hello!</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  entries: {
    fontFamily: 'arial',
    fontSize: 16
  }
});

export default TextList;
