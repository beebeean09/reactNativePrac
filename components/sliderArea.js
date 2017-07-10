import React from 'react';
import { View, StyleSheet, Slider, Text} from 'react-native';


class SliderArea extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text
          style={{color: 'black', fontSize: 14}}>Slider</Text>
        <Slider></Slider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    justifyContent: 'center'
  }
});

export default SliderArea;
