import React from 'react';
import TextList from './textList';
import { View, StyleSheet } from 'react-native';

class TextForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { name: 'Vivian', color: 'Blue' };
  }

  render() {
    const entry = [{ name: 'Vivian', color: 'Blue' }, { name: 'Jenny', color: 'black' }];

    return(
      <View style={styles.container}>
        <TextList entries={entry}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TextForm;
