import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import AppNavigation from './src/navigation/StackNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
    <AppNavigation />
    </SafeAreaView>
  )

};
const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  }
});

export default App;
