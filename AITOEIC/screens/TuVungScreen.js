import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';

export default function TuVungScreen({navigation}) {
  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <Header title="TỪ VỰNG" />

      <Text style={styles.text}>Bộ Từ Vựng TOEIC</Text>
      <TouchableOpacity
        style={{width: 200, height: 200, marginLeft: 20}}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('BoTuVung')}>
        <View style={{}}>
          <ImageBackground
            source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/banner/Tuvung.png')}
            style={{
              width: '135%',
              height: 200,
            }}>
            <Text style={styles.tuvungtext}>600 Từ Vựng TOEIC </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Từ Vựng Của Tôi</Text>
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
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },

  tuvungtext: {
    textShadowColor: 'black',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 20,
    marginTop: 150,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFF',
  },

  background: {
    backgroundColor: '#6699FF',
    width: 390,
    justifyContent: 'center',
    textAlign: 'center',
  },

  title: {
    color: '#FFF',
    marginLeft: 150,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    zIndex: 10,
  },

  buttonImageIconStyle: {},
});
