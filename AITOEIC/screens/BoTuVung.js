import React, {useState, useEffect} from 'react';
import {
  HeaderBackButton,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import firestore from '@react-native-firebase/firestore';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

export default function BoTuVung({navigation}) {
  const [loaddataxong, setLoadDataXong] = useState(false);
  const [loading, setLoading] = useState(false);
  const [arr, setTatCaData] = useState([]);

  const getdata = async () => {
    let arr = [];
    try {
      setLoading(true);
      const favor = await firestore().collection('Vocabulary').get();
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
    }
  }, []);
  return (
    <ImageBackground
      source={require('G:/LoginReactNativewFireBase/AITOEIC/assets/theme/backgroundapp.jpg')}
      style={{width: '100%', height: '100%'}}>
      <Header title="BỘ TỪ VỰNG" />
      <FlatList
        // horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={arr}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <ScrollView>
            <TouchableOpacity
              style={{width: 190, height: 200, marginTop: 10, marginLeft: 10}}
              activeOpacity={0.5}
              onPress={() => navigation.navigate(item.id)}>
              <ImageBackground source={{uri: item?.imagebackground}} style={{}}>
                <Text style={styles.tuvungtext}>{item?.name}</Text>
                <Text style={styles.sotu}>Số từ: {item?.sotu}</Text>
              </ImageBackground>
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
    margin: 20,
    fontSize: 20,
    color: '#333333',
  },

  sotu: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 23,
    // color: '#FFFF00',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 20,
    fontWeight: '800',
  },
  tuvungtext: {
    marginTop: 130,
    marginLeft: 10,
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'white',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 6,
    fontWeight: '800',
  },

  background: {
    backgroundColor: '#6699FF',
    width: 390,
    justifyContent: 'center',
    textAlign: 'center',
  },

  title: {
    color: '#FFF',
    marginLeft: 92,
    marginBottom: 12,
    paddingTop: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 25,
  },

  buttonImageIconStyle: {
    width: 300,
  },
});
