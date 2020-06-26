import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Route from './routes/Route'

class App extends React.Component {
  state = {  }
  render() {
    return (
      <Route/>
    );
  }
}

export default App;
