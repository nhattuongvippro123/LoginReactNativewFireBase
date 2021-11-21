import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function StatusBars() {
  return (
    <StatusBar style= {styles.statusbar}/>
  );
}
const styles = StyleSheet.create({
  statusbar: {
    backgroundColor:"#6699FF",
  },
});