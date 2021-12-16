import React, {useState, useEffect, useContext, useRef} from 'react';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import Sound from 'react-native-sound';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import Header from './../../components/Header';

// import firebase from '../firebase/config';

import {
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Animated,
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default function thitruong() {
  const [loaddataxong, setLoadDataXong] = useState(false);
  const [isModalVisible, setModalVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dataItem, setDataItem] = useState();
  const [arr, setTatCaData] = useState([]);

  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
    setSelectedItem(item);
  };
  const handleOnCloseModal = () => {
    setSelectedItem(null);
    setModalVisible(isModalVisible);
  };

  const gettuvung = async () => {
    let arr = [];
    try {
      setLoading(true);
      const favor = await firestore()
        .collection('Vocabulary')
        .doc('hopdong')
        .collection('word')
        .get();
      favor.docs.forEach(async (doc) => {
        arr.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setTatCaData(arr);
      setLoadDataXong(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const LoadAudioEachQuestion = (audio = '') => {
    if (audio) {
      const audioo = new Sound(audio, null, (error) => {
        const stop = () => {
          audioo.stop();
        };
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
            // if (dungaudio) {
            //   stop();
            // }
          });
        }
      });
    }
  };
  const test = (item) => {
    if (item.id == item.id) console.log(item.id);
  };

  useEffect(() => {
    if (!loaddataxong) {
      gettuvung();
    }
  }, []);
  return (
    <ImageBackground
      source={require('./../../assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <Header title="thitruong" />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={arr}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <ScrollView>
            <TouchableOpacity
              key={item}
              style={{
                marginBottom: 3,
                backgroundColor: 'white',
                width: Dimensions.get('window').width,
                height: 110,
              }}
              activeOpacity={0.5}
              onPress={() => {
                // toggleModal(item.id);
                // test(item);
                setModalVisible(false);
                setDataItem(item);
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{padding: 5}}>
                  <Image
                    source={{uri: item?.image}}
                    style={{
                      height: 100,
                      width: 120,
                      padding: 5,
                      borderRadius: 10,
                    }}
                  />
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 10,
                    flex: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#6699FF',
                      fontWeight: 'bold',
                      marginBottom: 15,
                    }}>
                    {item?.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#333366',
                    }}>
                    {item?.phienam}
                  </Text>
                </View>

                <View style={{flex: 1}}>
                  <TouchableOpacity
                    key={item?.audiotv}
                    style={{
                      padding: 5,
                      justifyContent: 'center',
                      marginLeft: 16,
                      marginTop: 30,
                      backgroundColor: '#FFFC',
                      borderWidth: 2,
                      borderColor: '#20232a',
                      borderRadius: 30,
                      height: 50,
                      width: 50,
                    }}
                    activeOpacity={0.5}
                    onPress={() => LoadAudioEachQuestion(item?.audiotv)}>
                    <Text style={{justifyContent: 'center', marginLeft: 3}}>
                      <Icon
                        style={{justifyContent: 'center', marginLeft: 5}}
                        name="sound"
                        size={30}
                        color="#6699FF"
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <Modal
              style={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: 200,
                margin: 0,
                backgroundColor: '#FFFF',
              }}
              isVisible={!isModalVisible}
              animationType="fade"
              transparent={true}
              onClose={handleOnCloseModal}
              onBackdropPress={() => handleOnCloseModal()}
              propagateSwipe={true}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#FFFC',
                  borderRadius: 30,
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 10,
                    borderBottomColor: '#C0C0C0',
                    borderBottomWidth: 1,
                  }}>
                  <TouchableOpacity
                    style={{
                      padding: 7,
                      justifyContent: 'center',
                      marginLeft: 6,
                      height: 50,
                      width: 60,
                    }}
                    activeOpacity={0.5}
                    onPress={() => setModalVisible(!isModalVisible)}>
                    <Text style={{justifyContent: 'center', marginLeft: 3}}>
                      <Icon
                        style={{marginBottom: 12, padding: 5}}
                        name="close"
                        size={28}
                        color="#6699FF"
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView style={{backgroundColor: '#FFFC', borderRadius: 30}}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
                    <View style={{flex: 1, marginLeft: 20}}>
                      <TouchableOpacity
                        style={{
                          padding: 5,
                          justifyContent: 'center',
                          marginTop: 5,
                          borderWidth: 2,
                          borderColor: '#20232a',
                          borderRadius: 30,
                          height: 50,
                          width: 50,
                        }}
                        activeOpacity={0.5}
                        onPress={() =>
                          LoadAudioEachQuestion(dataItem?.audiotv)
                        }>
                        <Text style={{justifyContent: 'center', marginLeft: 3}}>
                          <Icon
                            style={{justifyContent: 'center'}}
                            name="sound"
                            size={30}
                            color="#6699FF"
                          />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 5, marginLeft: 5}}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#6699FF',
                          fontWeight: 'bold',
                          marginBottom: 2,
                        }}>
                        {dataItem?.name}
                      </Text>
                      <Text style={{fontSize: 20, color: '#333366'}}>
                        {dataItem?.phienam}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      marginTop: 18,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: dataItem?.image}}
                      style={{height: 150, width: 180, padding: 5, margin: 10}}
                    />
                  </View>
                  <View
                    style={{flex: 1, justifyContent: 'center', marginLeft: 18}}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#333366',
                        textDecorationLine: 'underline',
                        fontStyle: 'italic',
                      }}>
                      {dataItem?.tuloai}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      marginLeft: 18,
                      marginTop: 18,
                      padding: 5,
                    }}>
                    <Text style={{fontSize: 20, color: '#66CCFF'}}>
                      {dataItem?.nghia}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      marginLeft: 18,
                      marginTop: 18,
                      padding: 5,
                    }}>
                    <Text style={{fontSize: 20, color: '#222222'}}>
                      1. {dataItem?.giaithich}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      marginLeft: 18,
                      marginTop: 18,
                      padding: 5,
                    }}>
                    <Text
                      style={{
                        marginBottom: 10,
                        fontSize: 20,
                        color: '#808080',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                      }}>
                      Ví dụ:
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#222222',
                        marginBottom: 10,
                      }}>
                      {dataItem?.vdta}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#222222',
                        marginBottom: 20,
                      }}>
                      {dataItem?.vdtv}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </Modal>
          </ScrollView>
        )}
      />
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
  background: {
    backgroundColor: '#6699FF',
    width: 390,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#FFF',
    marginLeft: 140,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
  },
});
