import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Header from './../../components/Header';
import Tts from 'react-native-tts';
import {WebView} from 'react-native-webview';
import {Platform} from 'react-native';
import RNFS from 'react-native-fs';
import FormButton from './../../components/FormButton';
import {TextInput, Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from 'react-native-text-recognition';

export default function AIspeakScreen() {
  const [text, setText] = useState();
  const [newpath, setPath] = useState();
  const [image, setImage] = useState(null);
  const path = `${RNFS.DocumentDirectoryPath}/voice8.mp3`;
  // const path = `${RNFS.DocumentDirectoryPath}/voice5.mp3`;
  const Sound = require('react-native-sound');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const texttospeech = () => {
    const url =
      'https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=AIzaSyBoiKmTSoARItgKpVG9DXT3u8xD8cTvzjM';
    const data = {
      input: {
        text,
      },
      voice: {
        languageCode: 'en-GB',
        name: 'en-GB-Wavenet-D',
        ssmlGender: 'MALE',
      },
      audioConfig: {
        audioEncoding: 'MP3',
      },
    };
    const otherparam = {
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
      method: 'POST',
    };
    fetch(url, otherparam)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        createFile(path, res.audioContent);
        setPath(path);
        console.log(path);
        if (newpath) {
          playMusic(newpath);
          deleteFile(path);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    const deleteFile = async (path) => {
      return (
        RNFS.unlink(path)
          .then(() => {
            console.log('FILE DELETED');
          })
          // `unlink` will throw an error, if the item to unlink does not exist
          .catch((err) => {
            console.log(err.message);
          })
      );
    };

    const createFile = async (path, data) => {
      try {
        return await RNFS.writeFile(path, data, 'base64');
      } catch (err) {
        console.warn(err);
      }
      return;
      null;
    };
    const playMusic = (music = '') => {
      const speech = new Sound(music, null, (error) => {
        if (error) {
          console.warn('failed to load the sound', error);

          return;
          null;
        }
        speech.play((success) => {
          if (!success) {
            console.warn('playback failed due to audio decoding errors');
          }
        });
        return;
        null;
      });
    };
  };
  const Scan = async () => {
    // const result = await TextRecognition.recognize(image?.assets[0]?.uri);
    const result1 = 'Enclave';
    setText(result1);
  };
  console.log(image);
  useEffect(() => {
    if (image) {
    }
  }, [image]);

  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: Dimensions.get('window').width, height: '100%'}}>
      <Header title="AI SPEAK" />
      <View
        style={{
          padding: 5,
          flexDirection: 'column',
          height: '100%',
        }}>
        <View
          style={{
            flex: 1,
            alignCenter: 'center',
            justifyContent: 'center',
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#000044',
            }}>
            Bạn có thể viết một câu hoặc dán một đoạn văn mà bạn thích vào ô
            trống bên dưới.
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: '#000044',
            }}>
            Hoặc bạn có thể chọn ảnh từ thư viện, AI SPEAK sẽ đọc cho bạn nghe.
          </Text>
          <Text style={{marginLeft: 25, marginTop: 10, fontSize: 15}}>
            Chọn ảnh bạn muốn scan:
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignCenter: 'center',
              justifyContent: 'center',
              marginLeft: 7,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                width: windowWidth / 2,
              }}
              mode="contained"
              onPress={() => launchImageLibrary({}, setImage)}>
              <Image
                source={require('../../assets/imageAISPEAK/folder.png')}
                resizeMode="contain"
                style={{
                  width: 150,
                  height: 100,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
            <Image
              source={{uri: image?.assets[0]?.uri}}
              resizeMode="contain"
              style={{
                marginLeft: 50,
                flex: 1,
                width: 250,
                height: 100,
                borderRadius: 10,
              }}
            />
            <Button
              style={{
                margin: 30,
                alignCenter: 'center',
                justifyContent: 'center',
              }}
              color="#8ad24e"
              mode="contained"
              onPress={() => Scan()}>
              Scan
            </Button>
          </View>
          <View style={{flex: 1, padding: 25}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setText(text)}
              value={text}
              placeholder="Nhập ở đây ..."
              onSubmitEditing={Keyboard.dismiss}
            />
            <Button
              style={{marginTop: 20}}
              color="#8ad24e"
              icon="volume-high"
              mode="contained"
              onPress={() => texttospeech()}>
              Bấm cái là đọc như thiệt luôn nè!
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 5,
    alignCenter: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 5,
  },
  sliderLabel: {
    textAlign: 'center',
    marginRight: 20,
  },
  slider: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    textAlign: 'center',
    height: 100,
  },
});
