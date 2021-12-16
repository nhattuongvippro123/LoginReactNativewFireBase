import React, {useContext, useEffect, useState, useRef} from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default function coban(navigation) {
  navigation = useNavigation();
  const [loaddataxong, setLoadDataXong] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arr, setTatCaData] = useState([]);
  const [count, setCount] = useState(0);
  const scrollRef = useRef();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const backtotopscrollview = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const getdata = async () => {
    let arr = [];
    try {
      setLoading(true);
      const favor = await firestore()
        .collection('NguPhap')
        .doc('coban')
        .collection('screen')
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

  useEffect(() => {
    if (!loaddataxong) {
      getdata();
      backtotopscrollview();
    }
  }, []);
  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <FlatList
        // horizontal
        style={{padding: 5}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={arr}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <ScrollView ref={scrollRef}>
            <TouchableOpacity
              style={{borderBottomWidth: 1}}
              activeOpacity={0.5}
              onPress={() => navigation.navigate(item.id)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: windowHeight / 10,
                }}>
                <View
                  style={{
                    marginLeft: 10,
                    backgroundColor: '#FFFF',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    {item?.so}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Text style={{fontSize: 20, color: '#000099'}}>
                    {item?.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
    color: '#000044',
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
  Viewborder: {
    height: 0.5,
    backgroundColor: '#000099',
  },
});
