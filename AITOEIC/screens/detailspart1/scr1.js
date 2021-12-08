import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Text, Icon, Image} from 'react-native-elements';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {COLORS} from './colors';
import Header from './../../components/Header';
import {ActivityIndicator} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import Loading from './../../components/Loading';

const scr1 = (navigation) => {
  navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [isAudio, setAudio] = useState('');
  const [Alert, setShowAlert] = useState(false);
  const [correctcount, setCorrectCount] = useState(1);
  const [incorrectcount, setInCorrectCount] = useState(1);
  const [over, setOver] = useState(false);
  const [TOTAL_QUESTION] = useState(10);
  const [optiondata, setOptionData] = useState([]);
  const [images, setImages] = useState('');
  const [totaldata, setTotalData] = useState('');

  const [flag, setFlag] = useState(false);
  const [click, setClick] = useState(false);
  const [selected, setSelected] = useState();

  const [isplay, setIsPlay] = useState(false);
  const [playstate, setPlayState] = useState('pause');
  const [playseconds, setPlaySeconds] = useState(0);
  const [duration, setDuration] = useState('');

  const load_data = async () => {
    try {
      setLoading(true);
      let tempoption = [];
      firestore()
        .collection('Quizzes')
        .doc('part1')
        .collection('cau1')
        .doc('1')
        .get()
        .then((data) => {
          const optiondata = data.data();
          optiondata.allOptions = shuffleArray([...optiondata.options]);
          tempoption.push(optiondata);
          setOptionData([...tempoption]);
          setAudio(optiondata.audio);
          setImages(optiondata);
          setTotalData(optiondata);
        });
    } catch (error) {
      Alert.alert('Error');
    } finally {
      setLoading(false);
    }
  };

  const ShowAlert = () => {
    setShowAlert(true);
  };
  const HideAlert = () => {
    setShowAlert(false);
  };
  const shuffleArray = (array) => {
    return array;
  };

  const handleAnswer = (item, index) => {
    setSelected(index);
    setClick(true);
    setFlag(false);
    if (item == optiondata[0].correct_answer) {
      setFlag(true);
    }
  };

  var Sound = require('react-native-sound');
  const audioo = new Sound(isAudio, null, (error) => {
    if (error) {
      console.log('Không lấy được audio1', error);
      return;
    } else {
      setTimeout(() => {
        console.log('Lấy audio thành công');
        play();
      }, 700);
    }
  });

  const play = () => {
    audioo.play((success) => {
      if (success) {
        console.log('Audio đã chạy xong!');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };
  const stop = () => {
    audioo.stop();
  };
  useEffect(() => {
    load_data();
    console.log(optiondata.audio);
  }, []);
  if (Loading) {
    return (
      <ImageBackground
        // source = {require('../assets/theme/backgroundapp.jpg')}
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <Header style={{backgroundColor: '#6699FF'}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => ShowAlert()}
              style={{
                width: 40,
                height: 40,
                borderRadius: 30,
                margin: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="arrow-back-outline" type="ionicon" color="white" />
            </TouchableOpacity>

            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#FFF',
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  fontSize: 25,
                }}>
                AITOEIC
              </Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => ShowAlert()}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 30,
                  margin: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="arrow-back-outline" type="ionicon" color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <AwesomeAlert
            show={Alert}
            showProgress={false}
            title="Bạn có chắc chắn thoát không?"
            closeOnTouchOutside={true}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText="Không"
            confirmText="Có, tôi muốn thoát"
            confirmButtonColor="#DD6B55"
            onCancelPressed={() => {
              HideAlert();
            }}
            onConfirmPressed={() => {
              navigation.goBack();
            }}
          />
        </Header>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#000022',
          }}>
          <TouchableOpacity
            onPress={play}
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="play-back-outline" type="ionicon" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={stop}
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="play-outline" type="ionicon" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={{}}
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="play-forward-outline" type="ionicon" color="white" />
          </TouchableOpacity>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                color: '#FFF',
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                fontSize: 25,
              }}>
              00:{duration}
            </Text>
          </View>
        </View>

        <View style={[styles.shadowContainerStyle]}>
          <View style={styles.containerView}>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                textAlign: 'center',
                color: '#FFF',
                fontWeight: 'bold',
              }}>
              Select the answer:{' '}
            </Text>
          </View>
          <View style={{marginLeft: 10}}>
            <Image
              source={{uri: images.image}}
              style={{
                height: 250,
                width: '97%',
                borderRadius: 5,
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>

          <View style={{marginTop: 20, marginLeft: 10}}>
            {optiondata[0]?.allOptions?.map((item, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  style={[
                    styles.buttona,
                    click == true
                      ? {
                          backgroundColor:
                            item == optiondata[0]?.correct_answer
                              ? COLORS.right
                              : selected == index
                              ? COLORS.wrong
                              : null,
                        }
                      : null,
                  ]}
                  activeOpacity={0.5}
                  underlayColor="#00000000"
                  onPress={() => {
                    handleAnswer(item, index);
                  }}>
                  <Text
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 20,
                    }}>
                    {item}
                  </Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </View>
        {loading ? (
          <OrientationLoadingOverlay
            visible={true}
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Loading..."
          />
        ) : null}
      </ImageBackground>
    );
  }
};
export default scr1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttona: {
    marginBottom: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFC',
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 40,
    height: 60,
    width: 60,
  },

  text: {
    fontSize: 20,
    color: '#333333',
  },
  shadowContainerStyle: {
    //<--- Style with elevation
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  containerView: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    backgroundColor: '#6699FF',
    width: '95%',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  containeralert: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonalert: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#AEDEF4',
  },
  textalert: {
    color: '#fff',
    fontSize: 15,
  },
});
