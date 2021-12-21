import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Header from './../../components/Header';
import Tts from 'react-native-tts';
import {WebView} from 'react-native-webview';

export default function AIspeakScreen() {
  const handleVoice = (ttsText) => {
    Tts.speak(ttsText);
  };
  const myHtmlFile = require('../../screens/webspeek/webtts.html');

  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <Header title="AISPEAK" />
      <WebView
        source={{uri: 'http://192.168.1.8:5500/screens/webspeek/webtts.html'}}
        style={{flex: 1}}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
