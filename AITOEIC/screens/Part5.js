import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

export default function Part1() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Part 5</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCFFFF'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});