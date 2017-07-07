import React from 'react';
import { View, NavigatorIOS } from 'react-native';
import App from '../App';

class Navbar extends React.Component {
  render() {

    return(
      <NavigatorIOS
        initialRoute={{
          component: App,
          title: 'Home Page'
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

export default Navbar;
