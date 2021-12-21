import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Image,
  ImageBackground,
  LogBox,
} from 'react-native';
export default function Loading() {
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.loadingContainer}>
      <ImageBackground
        source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
        style={{width: '100%', height: '100%'}}>
        <Image
          style={{height: 400, width: 400}}
          resizeMode="contain"
          source={require('../assets/banner/logo.png')}
        />
        <ActivityIndicator size="large" color="#FFFFFF" />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#6699FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
