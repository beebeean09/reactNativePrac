import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextItem from './textItem';

class TextList extends React.Component {
  render() {
    let textInput;
    if (this.props.entries) {
      textInput = this.props.entries.map((entry, idx) => {
        return (<TextItem key={idx} entry={entry}/>);
      });
    }

    return (
      <View style={styles.container}>
        {textInput}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  entries: {
    fontFamily: 'Arial',
    fontSize: 16
  }
});

export default TextList;
