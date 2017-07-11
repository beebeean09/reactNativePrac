import React from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { View, Text, StyleSheet } from 'react-native';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: null};
  }

  onDateChange() {

  }

  render() {
    return(
      <View>
        <CalendarPicker />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});

export default Calendar;
