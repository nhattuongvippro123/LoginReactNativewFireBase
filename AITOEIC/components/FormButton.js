import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export default function FormButton({buttonTitle, ...rest}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: windowWidth / 2,
    height: windowHeight / 14,
    backgroundColor: '#6699FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 28,
    color: '#ffffff',
  },
});
