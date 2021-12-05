import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
const Header = (props) => {
  const {style} = props;
  return <View style={(styles.background, style)}>{props.children}</View>;
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#6699FF',
    width: 390,
    justifyContent: 'center',
    textAlign: 'center',
    height: 100,
  },
  title: {
    color: '#FFF',
    marginLeft: 150,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
  },
});
export default Header;
