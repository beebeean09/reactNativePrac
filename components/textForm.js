import React from 'react';
import TextList from './textList';
import { View, StyleSheet } from 'react-native';

class TextForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const entry = [
      { name: 'Vivian', color: 'Blue' },
      { name: 'Jenny', color: 'black' },
      { name: 'Lisa', color: 'orange' },
      { name: 'Rose', color: 'pink' }
      ];

    return(
      <View style={styles.container}>
        <TextList entries={entry}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TextForm;
