import React from 'react';
import { View, ActivityIndicator, StyleSheet,Image, } from 'react-native';
export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <Image
        source={require('../assets/banner/banner1.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator size='large' color='#00FFFF' />
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#CCFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});