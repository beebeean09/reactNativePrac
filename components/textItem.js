import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TextItem extends React.Component {
  render() {
    const entry = this.props.entry;

    return(
      <View style={styles.container}>
        <Text style={styles.entry}>Name: {entry.name}</Text>
        <Text style={styles.entry}>Color: {entry.color}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 340
  },
  entry: {
    fontFamily: 'Arial',
    fontSize: 18,
  },
  header: {
    fontFamily: 'Arial',
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default TextItem;
