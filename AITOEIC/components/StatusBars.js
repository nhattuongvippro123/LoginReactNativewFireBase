import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
const StatusBars = (props) => {
  const {style} = props;
  return <View style={styles.background}></View>;
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#6699FF',
  },
});
export default StatusBars;
