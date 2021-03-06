import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Alert,
  Modal,
  Pressable,
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
import Sound from 'react-native-sound';
import {ProgressBar, Colors} from 'react-native-paper';

const scr2 = (navigation) => {
  navigation = useNavigation();
  const [arr, setTatCaData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAudio, setAudio] = useState('');
  const [Alert, setShowAlert] = useState(false);

  const [correctcount, setCorrectCount] = useState(0);
  const [incorrectcount, setInCorrectCount] = useState(1);
  const [over, setOver] = useState(false);
  const [totalquestion, TOTAL_QUESTION] = useState('');
  const [dunghet, setDungHet] = useState(false);

  const [loaddataxong, setLoadDataXong] = useState(false);
  const [loadaudio, setLoadAudio] = useState('');
  const [dungaudio, setDungAudio] = useState(false);
  const [audiostop, setAudioStop] = useState('');

  const [flag, setFlag] = useState(false);
  const [click, setClick] = useState(false);
  const [selected, setSelected] = useState();

  const [isplay, setIsPlay] = useState(false);
  const [playstate, setPlayState] = useState('pause');
  const [playseconds, setPlaySeconds] = useState(0);
  const [duration, setDuration] = useState('');

  const [countquestion, setCountQuestion] = useState(1);
  const [questionlist, setQuestionList] = useState([]);
  const [listnextquestion, setListNextQuestion] = useState(null);
  const [nextquestion, setNextQuestion] = useState(0);
  const [endquestion, setEndQuestion] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const nextQuestion = () => {
    setCountQuestion(countquestion + 1);
    stop(arr[nextquestion.audio]);
    var nextq = nextquestion + 1;
    if (nextq < arr.length) {
      setNextQuestion(nextq);
      console.log('next qs: ' + nextquestion);
      LoadAudioEachQuestion(arr[nextquestion + 1].audio);
      setClick(false);
    } else {
      setEndQuestion(true);
      setModalVisible(true);
      console.log('Xong');
      console.log('S??? c??u ????ng:', correctcount);
      if (correctcount == arr.length - 1) {
        setDungHet(true);
        console.log(dunghet);
        console.log(
          'R???t t???t, b???n nh??? gi??? v???ng phong ????? v?? c??? ti???p t???c ph??t huy',
        );
      } else {
        console.log(
          'B???n c???n c???i thi???n nhi???u h??n v??? Part1, v?? n?? ????n gi???n kh??ng th??? m???t ??i???m',
        );
      }
    }
  };

  const handleAnswer = (item, index) => {
    setSelected(index);
    setClick(true);
    setFlag(false);
    if (item == arr[nextquestion].correct_answer) {
      setFlag(true);
      setCorrectCount(correctcount + 1);
      stop(arr[nextquestion.audio]);
    }
    setTimeout(() => {
      nextQuestion();
      stop(arr[nextquestion.audio]);
    }, 700);
  };

  const load_data = async () => {
    let arr = [];
    try {
      setLoading(true);
      const totalpart1Ref = await firestore()
        .collection('Quizzes')
        .doc('part2')
        .collection('caccauhoi')
        .get();

      totalpart1Ref.docs.forEach(async (doc) => {
        arr.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setLoadDataXong(true);
      setTatCaData(arr);
      LoadAudioEachQuestion(arr[nextquestion].audio);
      TOTAL_QUESTION(arr.length);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const LoadAudioEachQuestion = (audio = '') => {
    if (audio) {
      console.log(nextquestion);
      const audioo = new Sound(audio, null, (error) => {
        if (error) {
          console.log('Kh??ng l???y ???????c audio', error);
          return;
        }
        console.log('L???y audio th??nh c??ng');

        audioo.play((success) => {
          if (success) {
            console.log('Audio ???? ch???y xong!');
          } else {
            console.log('errors');
          }
        });
      });
    }
  };
  const stop = (audio) => {
    const audioo = new Sound(audio + '', null, (error) => {
      audioo.getCurrentTime((seconds) => {
        console.log(audio);
        console.log('at ' + seconds);
        console.log('ko dung duoc audio');
      });
      audioo.stop();
      audioo.setVolume(0.0);
    });
  };
  const ShowAlert = () => {
    setShowAlert(true);
  };
  const HideAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (!loaddataxong) {
      load_data();
    }

    // console.log(listnextquestion);
  }, []);

  return (
    <ImageBackground
      // source = {require('../assets/theme/backgroundapp.jpg')}
      style={{
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}>
      <Header background="#6699FF" title="AITOEIC">
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
          title="B???n c?? ch???c ch???n tho??t kh??ng?"
          closeOnTouchOutside={true}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Kh??ng"
          confirmText="C??, t??i mu???n tho??t"
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
          height: '7%',
        }}>
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

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: '#FFF',
              fontWeight: 'bold',
              fontFamily: 'Cochin',
              fontSize: 25,
              alignItems: 'center',
              justifyContent: 'center',
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
            Select the answer:
          </Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            paddingBottom: 10,
            marginTop: 15,
          }}>
          <Text style={{fontSize: 30, marginBottom: 20}}>
            C??u {countquestion}:
          </Text>
          {arr[nextquestion]?.options.map((item, index) => {
            return (
              <TouchableHighlight
                key={index}
                style={[
                  styles.buttona,
                  click == true
                    ? {
                        backgroundColor:
                          item == arr[nextquestion]?.correct_answer
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
      {endquestion && dunghet ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/chucmung.jpg')}
                style={{
                  height: 150,
                  width: '97%',
                  borderRadius: 5,
                }}
              />
              <Text style={styles.modalText}>
                B???n ???? ho??n th??nh b??i luy???n t???p
              </Text>
              <Text
                style={{
                  marginBottom: 5,
                  textAlign: 'center',
                  color: '#6699FF',
                  fontWeight: 'bold',
                  fontSize: 17,
                  borderRadius: 10,
                }}>
                H???i & ????p
              </Text>
              <Text
                style={{
                  marginBottom: 15,
                  textAlign: 'center',
                  color: '#6699FF',
                  fontWeight: 'bold',
                  fontSize: 17,
                  borderRadius: 10,
                }}>
                (Nghe hi???u)
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: '#6699FF',
                  marginBottom: 15,
                  padding: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.right,
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  Correct: {correctcount}/{arr.length}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  R???t t???t, b???n nh??? gi??? v???ng phong ????? v?? c??? ti???p t???c ph??t huy.
                </Text>
              </View>

              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textmodal}>V??? m??n h??nh ch??nh</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part2')}>
                <Text style={styles.textmodal}>L??m l???i Part 2</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part3')}>
                <Text style={styles.textmodal}>Ti???p t???c Part 3</Text>
              </Pressable>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/chucmung3l.jpg')}
                  style={{
                    height: 250,
                    width: '97%',
                    borderRadius: 5,
                  }}
                />
                <Image
                  source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/chucmung3r.jpg')}
                  style={{
                    height: 250,
                    width: '97%',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/chucmung.jpg')}
                style={{
                  height: 150,
                  width: '97%',
                  borderRadius: 5,
                }}
              />
              <Text style={styles.modalText}>
                B???n ???? ho??n th??nh b??i luy???n t???p
              </Text>
              <Text
                style={{
                  marginBottom: 5,
                  textAlign: 'center',
                  color: '#6699FF',
                  fontWeight: 'bold',
                  fontSize: 17,
                  borderRadius: 10,
                }}>
                H???i & ????p
              </Text>
              <Text
                style={{
                  marginBottom: 15,
                  textAlign: 'center',
                  color: '#6699FF',
                  fontWeight: 'bold',
                  fontSize: 17,
                  borderRadius: 10,
                }}>
                (Nghe hi???u)
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: '#6699FF',
                  marginBottom: 15,
                  padding: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.wrong,
                    fontWeight: 'bold',
                    fontSize: 30,
                  }}>
                  Correct: {correctcount}/{arr.length}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  Ti???p t???c c??? g???ng nh??!
                </Text>
              </View>

              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textmodal}>M??n h??nh ch??nh</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part2')}>
                <Text style={styles.textmodal}>L??m l???i Part 2</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part2')}>
                <Text style={styles.textmodal}>Ti???p t???c Part 3</Text>
              </Pressable>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/chucmung3l.jpg')}
                  style={{
                    height: 250,
                    width: '97%',
                    borderRadius: 5,
                  }}
                />
                <Image
                  source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/chucmung3r.jpg')}
                  style={{
                    height: 250,
                    width: '97%',
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </ImageBackground>
  );
};
export default scr2;
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
    flexDirection: 'column',
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
    backgroundColor: '#6699FF',
    width: '95%',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    height: 710,
    width: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonmodal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonClosemodal: {
    backgroundColor: '#2196F3',
  },
  textmodal: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    color: '#4630EB',
  },
});
