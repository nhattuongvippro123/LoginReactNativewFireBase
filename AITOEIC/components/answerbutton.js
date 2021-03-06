import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

export default function answerbutton({ buttonTitle, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 2,
    height: windowHeight / 14,
    backgroundColor: '#6699FF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: circleDiameter / 2,
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 28,
    color: '#ffffff'
  }
});