import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Alert,
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

const scr1 = (navigation) => {
  navigation = useNavigation();
  const [arr, setTatCaData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAudio, setAudio] = useState('');
  const [Alert, setShowAlert] = useState(false);

  const [correctcount, setCorrectCount] = useState(1);
  const [incorrectcount, setInCorrectCount] = useState(1);
  const [over, setOver] = useState(false);
  const [TOTAL_QUESTION] = useState(10);

  const [loaddataxong, setLoadDataXong] = useState(false);
  const [loadaudio, setLoadAudio] = useState('');

  const [flag, setFlag] = useState(false);
  const [click, setClick] = useState(false);
  const [selected, setSelected] = useState();

  const [isplay, setIsPlay] = useState(false);
  const [playstate, setPlayState] = useState('pause');
  const [playseconds, setPlaySeconds] = useState(0);
  const [duration, setDuration] = useState('');

  const [questionlist, setQuestionList] = useState([]);
  const [listnextquestion, setListNextQuestion] = useState(null);
  const [nextquestion, setNextQuestion] = useState(0);

  const nextQuestion = () => {
    var nextq = nextquestion + 1;
    setNextQuestion(nextq);
    console.log('next qs: ' + nextquestion);
    LoadAudioEachQuestion(arr[nextquestion].audio);
  };

  const handleAnswer = (item, index) => {
    LoadAudioEachQuestion('');
    setSelected(index);
    setClick(true);
    setFlag(false);
    if (item == arr[nextquestion].correct_answer) {
      setFlag(true);
    }
    nextQuestion();
    setFlag(false);
  };

  const load_data = async () => {
    let arr = [];
    try {
      setLoading(true);
      const totalpart1Ref = await firestore()
        .collection('Quizzes')
        .doc('part1')
        .collection('cau1')
        .get();

      totalpart1Ref.docs.forEach(async (doc) => {
        arr.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      // console.log(arr[2].audio);
      setLoadDataXong(true);
      setTatCaData(arr);
      LoadAudioEachQuestion(arr[nextquestion].audio);

      // console.log(arr[2].audio);

      // let QuestionList = [];
      // const getAllQuestionPart1Ref = firestore()
      //   .collection('Quizzes')
      //   .doc('part1')
      //   .collection('cau1');
      // getAllQuestionPart1Ref.get().then((snapshot) => {
      //   snapshot.forEach((doc) => {
      //     QuestionList.push({
      //       id: doc.id,
      //       ...doc.data(),
      //     });
      //   });
      //   setQuestionList([...QuestionList]);
      //   // console.log(QuestionList[0]);

      //   // setAudio(QuestionList[0].audio');

      //   // console.log(loadaudio);
      //   setListNextQuestion('ss');
      //   console.log(listnextquestion);

      // });
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
          console.log('Không lấy được audio', error);
          return;
        } else {
          console.log('Lấy audio thành công');
          audioo.play((success) => {
            if (success) {
              console.log('Audio đã chạy xong!');
            } else {
              console.log('errors');
            }
          });
        }
      });
    }
  };
  const play = () => {
    audioo.play((success) => {
      if (success) {
        console.log('Audio đã chạy xong!');
      } else {
        console.log('errors');
      }
    });
  };
  const stop = () => {
    audioo.stop();
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

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            Select the answer:
          </Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Image
            source={{uri: arr[nextquestion]?.image}}
            style={{
              height: 250,
              width: '97%',
              borderRadius: 5,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>

        <View style={{marginTop: 20, marginLeft: 10}}>
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
      ) : (
        console.log('Null data')
      )}
    </ImageBackground>
  );
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
