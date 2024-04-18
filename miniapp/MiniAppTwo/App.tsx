import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = (props: any): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>App Two</Text>
      <Text style={styles.content}>
        Props from SuperApp: {JSON.stringify(props)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    margin: 5,
  },
  title: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;
