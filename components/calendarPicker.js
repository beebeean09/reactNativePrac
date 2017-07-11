import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { View, Text, StyleSheet } from 'react-native';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: null};
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date: date });
  }

  render() {
    const { date } = this.state;
    const startDate = date ? date.toString() : '';

    return(
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}/>
        <View>
          <Text style={styles.text}>SELECTED DATE: { date }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  text: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center'
  }
});

export default Calendar;
