import React from 'react';
import { View, Text, StyleSheet,ImageBackground} from 'react-native';

export default function NguPhapScreen() {
  return (
     <ImageBackground 
                      source = {require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')} 
                      style={{width: '100%', height: '100%',}}>
        <View style={styles.container}>
          <Text>Ngữ Pháp</Text>
        </View>
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
    color: '#333333'
  }
});