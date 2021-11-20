import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
export default function Header() {
  return (
    <SafeAreaView style={styles.background}>
    <Text style={styles.title}>AITOEIC</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    background: {
        backgroundColor:'#6699FF',
        width:390,
        justifyContent:'center',
        textAlign:'center',
      },
    title: {
        color: '#FFF',
        marginLeft:150,
        marginBottom:12,
        paddingTop:20,
        fontWeight: "bold",
        fontFamily: "Cochin",
        fontSize: 25,
  },
  });