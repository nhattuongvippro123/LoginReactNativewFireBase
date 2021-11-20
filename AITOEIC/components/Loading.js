import React from 'react';
import { View, ActivityIndicator, StyleSheet,Image, ImageBackground } from 'react-native';
export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
    <ImageBackground source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/hinhthu.jpg')} 
                      style={{width: '100%', height: '100%',}}>
      <Image
        source={require('../assets/theme/hinhthu.jpg')}
        style={{width: '100%'}}
      />
      <ActivityIndicator size='large' color='#FFFFFF' />
    </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#6699FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});