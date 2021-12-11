import React from 'react';
import {Text, SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
const Header = (props, navigation) => {
  const {style, title} = props;
  return (
    <View style={styles.background}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    // flexDirection: 'row',
    backgroundColor: '#6699FF',
    width: Dimensions.get('window').width,

    height: 70,
  },
  title: {
    color: '#FFF',
    // marginLeft: 150,
    marginBottom: 12,
    paddingTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
  },
});
export default Header;
