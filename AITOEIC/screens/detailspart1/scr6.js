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
  TouchableWithoutFeedback,
  ScrollView,
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

const scr6 = (navigation) => {
  navigation = useNavigation();
  const scrollRef = useRef();
  const [arr, setTatCaData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Alert, setShowAlert] = useState(false);

  const [countselectedanswer, setCountSelectedAnswer] = useState(4);
  const [counthoanthanhbai, setCountHoanThanhBai] = useState(1);
  const [countbai, setCountBai] = useState(1);
  const [correctcount, setCorrectCount] = useState(0);
  const [incorrectcount, setInCorrectCount] = useState(1);
  const [totalquestion, TOTAL_QUESTION] = useState('');
  const [dunghet, setDungHet] = useState(false);

  const [loaddataxong, setLoadDataXong] = useState(false);

  const [flag, setFlag] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const [selected1, setSelected1] = useState();
  const [selected2, setSelected2] = useState();
  const [selected3, setSelected3] = useState();
  const [selected4, setSelected4] = useState();
  const [countquestion, setCountQuestion] = useState(1);
  const [questionlist, setQuestionList] = useState([]);
  const [listnextquestion, setListNextQuestion] = useState(null);
  const [nextquestion, setNextQuestion] = useState(0);
  const [endquestion, setEndQuestion] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const backtotopscrollview = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const nextQuestion = () => {
    backtotopscrollview();
    setCountBai(countbai + 1);
    setCountQuestion(countquestion + 1);
    var nextq = nextquestion + 1;
    if (nextq < arr.length) {
      setNextQuestion(nextq);
      console.log('next qs: ' + nextquestion);
      setClick1(false);
      setClick2(false);
      setClick3(false);
      setClick4(false);
    } else {
      setEndQuestion(true);
      setModalVisible(true);
      console.log('Xong');
      console.log('Số câu đúng:', correctcount);
      if (correctcount == countselectedanswer) {
        setDungHet(true);
        console.log(dunghet);
        console.log(
          'Rất tốt, bạn nhớ giữ vững phong độ và cứ tiếp tục phát huy',
        );
      } else {
        console.log(
          'Bạn cần cải thiện nhiều hơn về Part1, vì nó đơn giản không thể mất điểm',
        );
      }
    }
  };

  const handleAnswer1 = (item, index) => {
    setCountHoanThanhBai(counthoanthanhbai + 1);
    console.log(counthoanthanhbai);
    setSelected1(index);
    setClick1(true);
    setFlag(false);
    if (item == arr[nextquestion].correct_answer1) {
      setFlag(true);
      setCorrectCount(correctcount + 1);
      console.log('đúng');
    }
    setTimeout(() => {
      if (counthoanthanhbai == countselectedanswer) {
        setCountSelectedAnswer(countselectedanswer + 4);
        nextQuestion();
      }
    }, 700);
  };

  const handleAnswer2 = (item, index) => {
    setCountHoanThanhBai(counthoanthanhbai + 1);
    console.log(counthoanthanhbai);
    setSelected2(index);
    setClick2(true);
    setFlag(false);
    if (item == arr[nextquestion].correct_answer2) {
      setFlag(true);
      setCorrectCount(correctcount + 1);
      console.log('đúng');
    }
    setTimeout(() => {
      if (counthoanthanhbai == countselectedanswer) {
        setCountSelectedAnswer(countselectedanswer + 4);
        nextQuestion();
      }
    }, 700);
  };

  const handleAnswer3 = (item, index) => {
    setCountHoanThanhBai(counthoanthanhbai + 1);
    console.log(counthoanthanhbai);
    console.log(countselectedanswer);
    setSelected3(index);
    setClick3(true);
    setFlag(false);
    if (item == arr[nextquestion].correct_answer) {
      setFlag(true);
      setCorrectCount(correctcount + 1);
      console.log('đúng');
      console.log(counthoanthanhbai);
    }
    setTimeout(() => {
      if (counthoanthanhbai == countselectedanswer) {
        setCountSelectedAnswer(countselectedanswer + 4);

        nextQuestion();
      }
    }, 700);
  };

  const handleAnswer4 = (item, index) => {
    setCountHoanThanhBai(counthoanthanhbai + 1);
    console.log(counthoanthanhbai);
    setSelected4(index);
    setClick4(true);
    setFlag(false);
    if (item == arr[nextquestion].correct_answer1) {
      setFlag(true);
      setCorrectCount(correctcount + 1);
      console.log('đúng');
    }
    setTimeout(() => {
      if (counthoanthanhbai == countselectedanswer) {
        setCountSelectedAnswer(countselectedanswer + 4);
        nextQuestion();
      }
    }, 700);
  };

  const load_data = async () => {
    let arr = [];
    try {
      setLoading(true);
      const totalpart1Ref = await firestore()
        .collection('Quizzes')
        .doc('part6')
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
      TOTAL_QUESTION(arr.length);
    } catch (error) {
      console.log(error);
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
            Bài {countbai}:
          </Text>
        </View>

        <ScrollView ref={scrollRef} style={{marginBottom: 35}}>
          <View
            style={{
              margin: 10,
              paddingBottom: 10,
              marginTop: 15,
              backgroundColor: '#EEEEEE',
              borderWidth: 3,
              borderRadius: 20,
              padding: 5,
              alignCenter: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 25,
                color: '#000099',
              }}>
              {arr[nextquestion]?.debai}
            </Text>
          </View>
        </ScrollView>

        <ScrollView ref={scrollRef}>
          <View
            style={{
              margin: 10,
              paddingBottom: 10,
              marginTop: 15,
              backgroundColor: '#EEEEEE',
              borderWidth: 3,
              borderRadius: 20,
              padding: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#FFFF',
                  borderRadius: 10,
                  borderWidth: 1,
                  justifyContent: 'center',
                  width: 50,
                  alignItems: 'center',
                  height: 50,
                }}>
                <Text style={{fontSize: 30}}>1</Text>
              </View>
              <Text
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 25,
                  color: '#000099',
                }}>
                ---- (1) ----
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  paddingTop: 10,
                  paddingLeft: 10,
                  justifyContent: 'center',
                }}>
                {arr[nextquestion]?.options.map((item, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      style={[
                        styles.buttona,
                        click1 == true
                          ? {
                              backgroundColor:
                                item == arr[nextquestion]?.correct_answer1
                                  ? COLORS.right
                                  : selected1 == index
                                  ? COLORS.wrong
                                  : null,
                            }
                          : null,
                      ]}
                      activeOpacity={0.5}
                      underlayColor="#00000000"
                      onPress={() => {
                        handleAnswer1(item, index);
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
              <View style={{flex: 1}}>
                {arr[nextquestion]?.answer1.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback
                      key={index}
                      style={styles.buttona}>
                      <Text
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: 25,
                          padding: 20,
                        }}>
                        {item}
                      </Text>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              paddingBottom: 10,
              marginTop: 15,
              backgroundColor: '#EEEEEE',
              borderWidth: 3,
              borderRadius: 20,
              padding: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#FFFF',
                  borderRadius: 10,
                  borderWidth: 1,
                  justifyContent: 'center',
                  width: 50,
                  alignItems: 'center',
                  height: 50,
                }}>
                <Text style={{fontSize: 30}}>2</Text>
              </View>
              <Text
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 25,
                  color: '#000099',
                }}>
                ---- (2) ----
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  paddingTop: 10,
                  paddingLeft: 10,
                  justifyContent: 'center',
                }}>
                {arr[nextquestion]?.options.map((item, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      style={[
                        styles.buttona,
                        click2 == true
                          ? {
                              backgroundColor:
                                item == arr[nextquestion]?.correct_answer2
                                  ? COLORS.right
                                  : selected2 == index
                                  ? COLORS.wrong
                                  : null,
                            }
                          : null,
                      ]}
                      activeOpacity={0.5}
                      underlayColor="#00000000"
                      onPress={() => {
                        handleAnswer2(item, index);
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
              <View style={{flex: 1}}>
                {arr[nextquestion]?.answer2.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback
                      key={index}
                      style={styles.buttona}>
                      <Text
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: 25,
                          padding: 20,
                        }}>
                        {item}
                      </Text>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              paddingBottom: 10,
              marginTop: 15,
              backgroundColor: '#EEEEEE',
              borderWidth: 3,
              borderRadius: 20,
              padding: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#FFFF',
                  borderRadius: 10,
                  borderWidth: 1,
                  justifyContent: 'center',
                  width: 50,
                  alignItems: 'center',
                  height: 50,
                }}>
                <Text style={{fontSize: 30}}>3</Text>
              </View>
              <Text
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 25,
                  color: '#000099',
                }}>
                ---- (3) ----
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  paddingTop: 10,
                  paddingLeft: 10,
                  justifyContent: 'center',
                }}>
                {arr[nextquestion]?.options.map((item, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      style={[
                        styles.buttona,
                        click3 == true
                          ? {
                              backgroundColor:
                                item == arr[nextquestion]?.correct_answer3
                                  ? COLORS.right
                                  : selected3 == index
                                  ? COLORS.wrong
                                  : null,
                            }
                          : null,
                      ]}
                      activeOpacity={0.5}
                      underlayColor="#00000000"
                      onPress={() => {
                        handleAnswer3(item, index);
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
              <View style={{flex: 1}}>
                {arr[nextquestion]?.answer3.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback
                      key={index}
                      style={styles.buttona}>
                      <Text
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: 25,
                          padding: 20,
                        }}>
                        {item}
                      </Text>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              marginBottom: 100,
              paddingBottom: 10,
              marginTop: 15,
              backgroundColor: '#EEEEEE',
              borderWidth: 3,
              borderRadius: 20,
              padding: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 10,
                paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#FFFF',
                  borderRadius: 10,
                  borderWidth: 1,
                  justifyContent: 'center',
                  width: 50,
                  alignItems: 'center',
                  height: 50,
                }}>
                <Text style={{fontSize: 30}}>4</Text>
              </View>
              <Text
                style={{
                  flex: 1,
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 25,
                  color: '#000099',
                }}>
                ---- (4) ----
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'column',
                  paddingTop: 10,
                  paddingLeft: 10,
                  justifyContent: 'center',
                }}>
                {arr[nextquestion]?.options.map((item, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      style={[
                        styles.buttona,
                        click4 == true
                          ? {
                              backgroundColor:
                                item == arr[nextquestion]?.correct_answer4
                                  ? COLORS.right
                                  : selected4 == index
                                  ? COLORS.wrong
                                  : null,
                            }
                          : null,
                      ]}
                      activeOpacity={0.5}
                      underlayColor="#00000000"
                      onPress={() => {
                        handleAnswer4(item, index);
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
              <View style={{flex: 1}}>
                {arr[nextquestion]?.answer4.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback
                      key={index}
                      style={styles.buttona}>
                      <Text
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: 25,
                          padding: 20,
                        }}>
                        {item}
                      </Text>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
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
                Bạn đã hoàn thành bài luyện tập
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
                Điền vào đoạn văn
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
                (Đọc hiểu)
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
                  Correct: {correctcount}/{countselectedanswer}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  Rất tốt, bạn nhớ giữ vững phong độ và cứ tiếp tục phát huy.
                </Text>
              </View>

              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textmodal}>Về màn hình chính</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part6')}>
                <Text style={styles.textmodal}>Làm lại Part 6</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part7')}>
                <Text style={styles.textmodal}>Tiếp tục Part 7</Text>
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
                Bạn đã hoàn thành bài luyện tập
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
                Điền vào đoạn văn
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
                (Đọc hiểu)
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
                  Correct: {correctcount}/{countselectedanswer}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: 'bold',
                    fontSize: 17,
                  }}>
                  Bạn tiếp tục cố gắng nhé!
                </Text>
              </View>

              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textmodal}>Màn hình chính</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part6')}>
                <Text style={styles.textmodal}>Làm lại Part 6</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonmodal, styles.buttonClosemodal]}
                onPress={() => navigation.navigate('Part7')}>
                <Text style={styles.textmodal}>Tiếp tục Part 7</Text>
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
export default scr6;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttona: {
    marginBottom: 10,
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
